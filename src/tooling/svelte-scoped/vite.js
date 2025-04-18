import process from 'node:process'
import { cssIdRE, createGenerator } from '@unocss/core'
import { loadConfig } from '@unocss/config'
import presetUno from '@unocss/preset-uno'
import { U as UnocssSveltePreprocess } from './shared/svelte-scoped.v5kEsLox.js'
import { readFileSync, existsSync, statSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import MagicString from 'magic-string'
import remapping from '@ampproject/remapping'
import 'node:crypto'
import 'css-tree'

function PassPreprocessToSveltePlugin(context, options = {}) {
	let commandIsBuild = true
	const isBuild = () => commandIsBuild
	return {
		name: 'unocss:svelte-scoped:pass-preprocess',
		enforce: 'pre',
		configResolved({ command }) {
			commandIsBuild = command === 'build'
		},
		api: {
			sveltePreprocess: UnocssSveltePreprocess(options, context, isBuild)
		}
	}
}

const PLACEHOLDER_USER_SETS_IN_INDEX_HTML = '%unocss-svelte-scoped.global%'
const GLOBAL_STYLES_PLACEHOLDER = 'unocss_svelte_scoped_global_styles'
const DEV_GLOBAL_STYLES_DATA_TITLE = 'unocss-svelte-scoped global styles'

const _dirname =
	typeof __dirname !== 'undefined' ? __dirname : dirname(fileURLToPath(import.meta.url))
function getReset(injectReset) {
	if (injectReset.startsWith('@unocss/reset')) {
		const resolvedPNPM = resolve(resolve(_dirname, `../../../${injectReset}`))
		if (isFile(resolvedPNPM)) return readFileSync(resolvedPNPM, 'utf-8')
		const resolvedPNPM_in_uno_repo = resolve(resolve(_dirname, `../node_modules/${injectReset}`))
		if (isFile(resolvedPNPM_in_uno_repo)) return readFileSync(resolvedPNPM_in_uno_repo, 'utf-8')
		const resolvedNPM = resolve(process.cwd(), 'node_modules', injectReset)
		if (isFile(resolvedNPM)) return readFileSync(resolvedNPM, 'utf-8')
		throw new Error(
			`"${injectReset}" given as your injectReset value is not found. Please make sure it is one of the five supported @unocss/reset options. If it is, file a bug report detailing your environment and package manager`
		)
	}
	if (injectReset.startsWith('.')) {
		const resolved = resolve(process.cwd(), injectReset)
		if (!isFile(resolved))
			throw new Error(
				`"${injectReset}" given as your injectReset value is not a valid file path relative to the root of your project, where your vite config file sits. To give an example, if you placed a reset.css in your src directory, "./src/reset.css" would work.`
			)
		return readFileSync(resolved, 'utf-8')
	}
	if (injectReset.startsWith('/'))
		throw new Error(
			`Your injectReset value: "${injectReset}" is not a valid file path. To give an example, if you placed a reset.css in your src directory, "./src/reset.css" would work.`
		)
	const resolvedFromNodeModules = resolve(process.cwd(), 'node_modules', injectReset)
	if (!isFile(resolvedFromNodeModules))
		throw new Error(
			`"${injectReset}" given as your injectReset value is not a valid file path relative to your project's node_modules folder. Can you confirm that you've installed "${injectReset}"?`
		)
	return readFileSync(resolvedFromNodeModules, 'utf-8')
}
function isFile(path) {
	return existsSync(path) && statSync(path).isFile()
}

function isServerHooksFile(path) {
	return path.includes('hooks') && path.includes('server')
}
function replaceGlobalStylesPlaceholder(code, stylesTag) {
	const captureQuoteMark = '(["\'`])'
	const matchCapturedQuoteMark = '\\1'
	const QUOTES_WITH_PLACEHOLDER_RE = new RegExp(
		captureQuoteMark + GLOBAL_STYLES_PLACEHOLDER + matchCapturedQuoteMark
	)
	const escapedStylesTag = stylesTag
		.replaceAll(/\\(?![`$])/g, '\\\\')
		.replaceAll(/(?<!\\)([`$])/g, '\\$1')
	return code.replace(QUOTES_WITH_PLACEHOLDER_RE, `\`${escapedStylesTag}\``)
}
async function generateGlobalCss(uno, injectReset) {
	const { css } = await uno.generate('', { preflights: true, safelist: true, minify: true })
	const reset = injectReset ? getReset(injectReset) : ''
	return reset + css
}
const SVELTE_ERROR = `[unocss] You have not setup the svelte-scoped global styles correctly. You must place '${PLACEHOLDER_USER_SETS_IN_INDEX_HTML}' in your index.html file.
`
const SVELTE_KIT_ERROR = `[unocss] You have not setup the svelte-scoped global styles correctly. You must place '${PLACEHOLDER_USER_SETS_IN_INDEX_HTML}' in your app.html file. You also need to have a transformPageChunk hook in your hooks.server.js file with: \`html.replace('${PLACEHOLDER_USER_SETS_IN_INDEX_HTML}', '${GLOBAL_STYLES_PLACEHOLDER}')\`. You can see an example of the usage at https://github.com/unocss/unocss/tree/main/examples/sveltekit-scoped.`
function checkTransformPageChunkHook(server, isSvelteKit) {
	server.middlewares.use((req, res, next) => {
		const originalWrite = res.write
		res.write = function (chunk, ...rest) {
			const str =
				typeof chunk === 'string'
					? chunk
					: chunk instanceof Buffer
						? chunk.toString()
						: Array.isArray(chunk) || 'at' in chunk
							? Buffer.from(chunk).toString()
							: `${chunk}`
			if (str.includes('<head>') && !str.includes(DEV_GLOBAL_STYLES_DATA_TITLE))
				server.config.logger.error(isSvelteKit ? SVELTE_KIT_ERROR : SVELTE_ERROR, {
					timestamp: true
				})
			return originalWrite.call(this, chunk, ...rest)
		}
		next()
	})
}

function GlobalStylesPlugin({ ready, uno }, injectReset) {
	let isSvelteKit
	let viteConfig
	let unoCssFileReferenceId
	let unoCssHashedLinkTag
	return {
		name: 'unocss:svelte-scoped:global-styles',
		async configResolved(_viteConfig) {
			viteConfig = _viteConfig
			await ready
			isSvelteKit = viteConfig.plugins.some((p) => p.name.includes('sveltekit'))
		},
		// serve
		configureServer: (server) => checkTransformPageChunkHook(server, isSvelteKit),
		// serve
		async transform(code, id) {
			if (isSvelteKit && viteConfig.command === 'serve' && isServerHooksFile(id)) {
				const css = await generateGlobalCss(uno, injectReset)
				return {
					code: replaceGlobalStylesPlaceholder(
						code,
						`<style type="text/css" data-title="${DEV_GLOBAL_STYLES_DATA_TITLE}">${css}</style>`
					)
				}
			}
		},
		// build
		async buildStart() {
			if (viteConfig.command === 'build') {
				const css = await generateGlobalCss(uno, injectReset)
				unoCssFileReferenceId = this.emitFile({
					type: 'asset',
					name: 'unocss-svelte-scoped-global.css',
					source: css
				})
			}
		},
		// build
		renderStart() {
			const unoCssFileName = this.getFileName(unoCssFileReferenceId)
			const base = viteConfig.base ?? '/'
			unoCssHashedLinkTag = `<link href="${base}${unoCssFileName}" rel="stylesheet" />`
		},
		// build
		renderChunk(code, chunk) {
			if (isSvelteKit && chunk.moduleIds.some((id) => isServerHooksFile(id)))
				return replaceGlobalStylesPlaceholder(code, unoCssHashedLinkTag)
		},
		// serve and build
		async transformIndexHtml(html) {
			if (!isSvelteKit) {
				if (viteConfig.command === 'build')
					return html.replace(PLACEHOLDER_USER_SETS_IN_INDEX_HTML, unoCssHashedLinkTag)
				if (viteConfig.command === 'serve') {
					const css = await generateGlobalCss(uno, injectReset)
					return html.replace(
						PLACEHOLDER_USER_SETS_IN_INDEX_HTML,
						`<style type="text/css" data-title="${DEV_GLOBAL_STYLES_DATA_TITLE}">${css}</style>`
					)
				}
			}
		}
	}
}

const IGNORE_COMMENT = '@unocss-ignore'
const SKIP_START_COMMENT = '@unocss-skip-start'
const SKIP_END_COMMENT = '@unocss-skip-end'
const SKIP_COMMENT_RE = new RegExp(
	`(//\\s*?${SKIP_START_COMMENT}\\s*?|\\/\\*\\s*?${SKIP_START_COMMENT}\\s*?\\*\\/|<!--\\s*?${SKIP_START_COMMENT}\\s*?-->)[\\s\\S]*?(//\\s*?${SKIP_END_COMMENT}\\s*?|\\/\\*\\s*?${SKIP_END_COMMENT}\\s*?\\*\\/|<!--\\s*?${SKIP_END_COMMENT}\\s*?-->)`,
	'g'
)

function hash(str) {
	let i
	let l
	let hval = 2166136261
	for (i = 0, l = str.length; i < l; i++) {
		hval ^= str.charCodeAt(i)
		hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24)
	}
	return `00000${(hval >>> 0).toString(36)}`.slice(-6)
}

async function applyTransformers(ctx, original, id, enforce = 'default') {
	if (original.includes(IGNORE_COMMENT)) return
	const transformers = (ctx.uno.config.transformers || []).filter(
		(i) => (i.enforce || 'default') === enforce
	)
	if (!transformers.length) return
	const skipMap = /* @__PURE__ */ new Map()
	let code = original
	let s = new MagicString(transformSkipCode(code, skipMap))
	const maps = []
	for (const t of transformers) {
		if (t.idFilter) {
			if (!t.idFilter(id)) continue
		} else if (!ctx.filter(code, id)) {
			continue
		}
		await t.transform(s, id, ctx)
		if (s.hasChanged()) {
			code = restoreSkipCode(s.toString(), skipMap)
			maps.push(s.generateMap({ hires: true, source: id }))
			s = new MagicString(code)
		}
	}
	if (code !== original) {
		ctx.affectedModules.add(id)
		return {
			code,
			map: remapping(maps, () => null)
		}
	}
}
function transformSkipCode(code, map) {
	for (const item of Array.from(code.matchAll(SKIP_COMMENT_RE))) {
		if (item != null) {
			const matched = item[0]
			const withHashKey = `@unocss-skip-placeholder-${hash(matched)}`
			map.set(withHashKey, matched)
			code = code.replace(matched, withHashKey)
		}
	}
	return code
}
function restoreSkipCode(code, map) {
	for (const [withHashKey, matched] of map.entries()) code = code.replace(withHashKey, matched)
	return code
}

const svelteIdRE = /[&?]svelte/
function createCssTransformerPlugins(context, cssTransformers) {
	const enforces = ['default', 'pre', 'post']
	return enforces.map((enforce) => ({
		name: `unocss:svelte-scoped-transformers:${enforce}`,
		enforce: enforce === 'default' ? void 0 : enforce,
		async transform(code, id) {
			if (!cssIdRE.test(id) || svelteIdRE.test(id)) return
			context.uno.config.transformers = cssTransformers ?? []
			return applyTransformers(
				{
					...context,
					affectedModules: /* @__PURE__ */ new Set()
				},
				code,
				id,
				enforce
			)
		}
	}))
}

function ConfigHMRPlugin({ ready }) {
	return {
		name: 'unocss:svelte-scoped:config',
		async configureServer(server) {
			const { sources } = await ready
			if (!sources.length) return
			server.watcher.add(sources)
			server.watcher.on('add', handleFileChange)
			server.watcher.on('change', handleFileChange)
			server.watcher.on('unlink', handleFileChange)
			function handleFileChange(filepath) {
				if (sources.includes(filepath)) server.restart()
			}
		}
	}
}

function UnocssSvelteScopedVite(options = {}) {
	const context = createSvelteScopedContext(options.configOrPath)
	if (context.uno.config.transformers)
		throw new Error(
			'Due to the differences in normal UnoCSS global usage and Svelte Scoped usage, "config.transformers" will be ignored. You can still use transformers in CSS files with the "cssFileTransformers" option.'
		)
	if (!options.classPrefix) options.classPrefix = 'uno-'
	const plugins = [GlobalStylesPlugin(context, options.injectReset), ConfigHMRPlugin(context)]
	if (!options.onlyGlobal) plugins.push(PassPreprocessToSveltePlugin(context, options))
	if (options.cssFileTransformers)
		plugins.push(...createCssTransformerPlugins(context, options.cssFileTransformers))
	return plugins
}
const defaults = {
	presets: [presetUno()]
}
function createSvelteScopedContext(configOrPath) {
	const uno = createGenerator()
	const ready = reloadConfig()
	async function reloadConfig() {
		const { config, sources } = await loadConfig(process.cwd(), configOrPath)
		uno.setConfig(config, defaults)
		return { config, sources }
	}
	return {
		uno,
		ready
	}
}

export { UnocssSvelteScopedVite as default }

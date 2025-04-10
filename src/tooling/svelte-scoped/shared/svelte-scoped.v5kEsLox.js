import process from 'node:process'
import {
	expandVariantGroup,
	regexScopePlaceholder,
	warnOnce,
	toArray,
	createGenerator
} from '@unocss/core'
import presetUno from '@unocss/preset-uno'
import { loadConfig } from '@unocss/config'
import MagicString from 'magic-string'
import { generate, parse, clone, walk } from 'css-tree'

const NOT_PRECEEDED_BY_DIGIT_OR_OPEN_PARENTHESIS_RE = /(?<![\d(])/
const SELECTOR_STARTING_WITH_BRACKET_OR_PERIOD_RE = /([[\.][\S\s]+?)/
const STYLES_RE = /({[\S\s]+?})/
const EXTRACT_SELECTOR_RE = new RegExp(
	NOT_PRECEEDED_BY_DIGIT_OR_OPEN_PARENTHESIS_RE.source +
		SELECTOR_STARTING_WITH_BRACKET_OR_PERIOD_RE.source +
		STYLES_RE.source,
	'g'
)
function wrapSelectorsWithGlobal(css) {
	return css.replace(EXTRACT_SELECTOR_RE, ':global($1)$2')
}

const classesRE$1 = /class=(["'\`])([\S\s]*?)\1/g
const classDirectivesRE = /class:([\S]+?)="?{/g
const classDirectivesShorthandRE = /class:([^=>\s/]+)[{>\s/]/g
function findClasses(code) {
	const matchedClasses = [...code.matchAll(classesRE$1)]
	const matchedClassDirectives = [...code.matchAll(classDirectivesRE)]
	const matchedClassDirectivesShorthand = [...code.matchAll(classDirectivesShorthandRE)]
	const classes = parseMatches(matchedClasses, 'regular', 'class="'.length)
	const classDirectives = parseMatches(matchedClassDirectives, 'directive', 'class:'.length)
	const classDirectivesShorthand = parseMatches(
		matchedClassDirectivesShorthand,
		'directiveShorthand',
		'class:'.length
	)
	return [...classes, ...classDirectives, ...classDirectivesShorthand]
}
function parseMatches(matches, type, prefixLength) {
	return matches
		.map((match) => {
			const body = match[type === 'regular' ? 2 : 1]
			const start = match.index + prefixLength
			return {
				body: body.trim(),
				start,
				end: start + body.length,
				type
			}
		})
		.filter(hasBody)
}
function hasBody(foundClass) {
	return foundClass.body
}

const notInCommentRE = /(?<!<!--\s*)/
const stylesTagWithCapturedDirectivesRE = /<style([^>]*)>[\s\S]*?<\/style\s*>/
const actualStylesTagWithCapturedDirectivesRE = new RegExp(
	notInCommentRE.source + stylesTagWithCapturedDirectivesRE.source,
	'g'
)
const captureOpeningStyleTagWithAttributesRE = /(<\/style[^>]*>)/
function addGeneratedStylesIntoStyleBlock(code, styles) {
	const preExistingStylesTag = code.match(actualStylesTagWithCapturedDirectivesRE)
	if (preExistingStylesTag)
		return code.replace(captureOpeningStyleTagWithAttributesRE, `${styles}$1`)
	return `${code}
<style>${styles}</style>`
}

async function needsGenerated(token, uno) {
	const inSafelist = uno.config.safelist.includes(token)
	if (inSafelist) return false
	const result = await uno.parseToken(token)
	return !!result
}

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

function generateClassName(body, options, filename) {
	const { classPrefix = 'uno-', combine = true, hashFn = hash } = options
	if (combine) {
		const classPlusFilenameHash = hashFn(body + filename)
		return `${classPrefix}${classPlusFilenameHash}`
	} else {
		const filenameHash = hashFn(filename)
		return `_${body}_${filenameHash}`
	}
}

function isShortcut(token, shortcuts) {
	return shortcuts.some((s) => s[0] === token)
}

async function processDirective({ body: token, start, end, type }, options, uno, filename) {
	const isShortcutOrUtility =
		isShortcut(token, uno.config.shortcuts) || (await needsGenerated(token, uno))
	if (!isShortcutOrUtility) return
	const generatedClassName = generateClassName(token, options, filename)
	const content =
		type === 'directiveShorthand' ? `${generatedClassName}={${token}}` : generatedClassName
	return {
		rulesToGenerate: { [generatedClassName]: [token] },
		codeUpdate: { content, start, end }
	}
}

async function sortClassesIntoCategories(body, options, uno, filename) {
	const { combine = true } = options
	const rulesToGenerate = {}
	const ignore = []
	const classes = body.trim().split(/\s+/)
	const knownClassesToCombine = []
	for (const token of classes) {
		const isShortcutOrUtility =
			isShortcut(token, uno.config.shortcuts) || (await needsGenerated(token, uno))
		if (!isShortcutOrUtility) {
			ignore.push(token)
			continue
		}
		if (combine) {
			knownClassesToCombine.push(token)
		} else {
			const generatedClassName = generateClassName(token, options, filename)
			rulesToGenerate[generatedClassName] = [token]
		}
	}
	if (knownClassesToCombine.length) {
		const generatedClassName = generateClassName(knownClassesToCombine.join(' '), options, filename)
		rulesToGenerate[generatedClassName] = knownClassesToCombine
	}
	return { rulesToGenerate, ignore }
}

const expressionsRE = /\S*{[^{}]+?}\S*/g
const classesRE = /(["'\`])([\S\s]*?)\1/g
async function processExpressions(body, options, uno, filename) {
	const rulesToGenerate = {}
	const updatedExpressions = []
	let restOfBody = body
	const expressions = [...body.matchAll(expressionsRE)]
	for (let [expression] of expressions) {
		restOfBody = restOfBody.replace(expression, '').trim()
		const classes = [...expression.matchAll(classesRE)]
		for (const [withQuotes, quoteMark, withoutQuotes] of classes) {
			const { rulesToGenerate: rulesFromExpression, ignore } = await sortClassesIntoCategories(
				withoutQuotes,
				options,
				uno,
				filename
			)
			Object.assign(rulesToGenerate, rulesFromExpression)
			const updatedClasses = Object.keys(rulesFromExpression).concat(ignore).join(' ')
			expression = expression.replace(withQuotes, quoteMark + updatedClasses + quoteMark)
		}
		updatedExpressions.push(expression)
	}
	return { rulesToGenerate, updatedExpressions, restOfBody }
}

async function processClassBody({ body, start, end }, options, uno, filename) {
	const expandedBody = expandVariantGroup(body)
	const {
		rulesToGenerate: rulesFromExpressions,
		restOfBody,
		updatedExpressions
	} = await processExpressions(expandedBody, options, uno, filename)
	const { rulesToGenerate: rulesFromRegularClasses, ignore } = await sortClassesIntoCategories(
		restOfBody,
		options,
		uno,
		filename
	)
	const rulesToGenerate = { ...rulesFromExpressions, ...rulesFromRegularClasses }
	if (!Object.keys(rulesToGenerate).length) return {}
	const content = Object.keys(rulesFromRegularClasses)
		.concat(ignore)
		.concat(updatedExpressions)
		.join(' ')
	const codeUpdate = {
		content,
		start,
		end
	}
	return { rulesToGenerate, codeUpdate }
}

async function processClasses(classes, options, uno, filename) {
	const result = {
		rulesToGenerate: {},
		codeUpdates: []
	}
	for (const foundClass of classes) {
		if (foundClass.type === 'regular') {
			const { rulesToGenerate, codeUpdate } = await processClassBody(
				foundClass,
				options,
				uno,
				filename
			)
			if (rulesToGenerate) Object.assign(result.rulesToGenerate, rulesToGenerate)
			if (codeUpdate) result.codeUpdates.push(codeUpdate)
		} else {
			const { rulesToGenerate, codeUpdate } =
				(await processDirective(foundClass, options, uno, filename)) || {}
			if (rulesToGenerate) Object.assign(result.rulesToGenerate, rulesToGenerate)
			if (codeUpdate) result.codeUpdates.push(codeUpdate)
		}
	}
	return result
}

async function transformClasses({ content, filename, uno, options }) {
	const classesToProcess = findClasses(content)
	if (!classesToProcess.length) return
	const { rulesToGenerate, codeUpdates } = await processClasses(
		classesToProcess,
		options,
		uno,
		filename
	)
	if (!Object.keys(rulesToGenerate).length) return
	const { map, code } = updateTemplateCodeIfNeeded(codeUpdates, content, filename)
	const generatedStyles = await generateStyles(rulesToGenerate, uno)
	const codeWithGeneratedStyles = addGeneratedStylesIntoStyleBlock(code, generatedStyles)
	return {
		code: codeWithGeneratedStyles,
		map
	}
}
function updateTemplateCodeIfNeeded(codeUpdates, source, filename) {
	if (!codeUpdates.length) return { code: source, map: void 0 }
	const s = new MagicString(source)
	for (const { start, end, content } of codeUpdates) s.overwrite(start, end, content)
	return {
		code: s.toString(),
		map: s.generateMap({ hires: true, source: filename })
	}
}
const REMOVE_COMMENTS_TO_MAKE_GLOBAL_WRAPPING_EASY = true
async function generateStyles(rulesToGenerate, uno) {
	const shortcutsForThisComponent = Object.entries(rulesToGenerate)
	uno.config.shortcuts.push(...shortcutsForThisComponent)
	const selectorsToGenerate = Object.keys(rulesToGenerate)
	const { css } = await uno.generate(selectorsToGenerate, {
		preflights: false,
		safelist: false,
		minify: REMOVE_COMMENTS_TO_MAKE_GLOBAL_WRAPPING_EASY
	})
	const cssPreparedForSvelteCompiler = wrapSelectorsWithGlobal(css)
	return cssPreparedForSvelteCompiler
}

function removeOuterQuotes(input) {
	if (!input) return ''
	return /^(['"]).*\1$/.test(input) ? input.slice(1, -1) : input
}

function writeUtilStyles([, selector, body, parent], s, node, childNode) {
	if (!selector) return
	const selectorChanged = selector !== '.\\-'
	if (!parent && !selectorChanged) return s.appendRight(childNode.loc.end.offset, body)
	const originalSelector = generate(node.prelude)
	if (parent && !selectorChanged) {
		const css2 = `${parent}{${originalSelector}{${body}}}`
		return s.appendLeft(node.loc.end.offset, css2)
	}
	const utilSelector = selector.replace(regexScopePlaceholder, ' ')
	const updatedSelector = generateUpdatedSelector(utilSelector, node.prelude)
	const svelteCompilerReadySelector = surroundAllButOriginalSelectorWithGlobal(
		originalSelector,
		updatedSelector
	)
	const rule = `${svelteCompilerReadySelector}{${body}}`
	const css = parent ? `${parent}{${rule}}` : rule
	s.appendLeft(node.loc.end.offset, css)
}
function generateUpdatedSelector(selector, _prelude) {
	const selectorAST = parse(selector, {
		context: 'selector'
	})
	const prelude = clone(_prelude)
	prelude.children.forEach((child) => {
		const parentSelectorAst = clone(selectorAST)
		parentSelectorAst.children.forEach((i) => {
			if (i.type === 'ClassSelector' && i.name === '\\-') Object.assign(i, clone(child))
		})
		Object.assign(child, parentSelectorAst)
	})
	return generate(prelude)
}
function surroundAllButOriginalSelectorWithGlobal(originalSelector, updatedSelector) {
	const wrapWithGlobal = (str) => `:global(${str})`
	const originalSelectors = originalSelector.split(',').map((s) => s.trim())
	const updatedSelectors = updatedSelector.split(',').map((s) => s.trim())
	const resultSelectors = originalSelectors.map((original, index) => {
		const updated = updatedSelectors[index]
		const [prefix, suffix] = updated.split(original).map((s) => s.trim())
		const wrappedPrefix = prefix ? wrapWithGlobal(prefix) : ''
		if (!suffix) return `${wrappedPrefix} ${original}`.trim()
		const indexOfFirstCombinator = findFirstCombinatorIndex(suffix)
		if (indexOfFirstCombinator === -1) return `${wrappedPrefix} ${original}${suffix}`.trim()
		const pseudo = suffix.substring(0, indexOfFirstCombinator).trim()
		const siblingsOrDescendants = suffix.substring(indexOfFirstCombinator).trim()
		return `${wrappedPrefix} ${original}${pseudo} ${wrapWithGlobal(siblingsOrDescendants)}`.trim()
	})
	return resultSelectors.join(', ')
}
function findFirstCombinatorIndex(input) {
	const combinators = [' ', '>', '~', '+']
	for (const c of combinators) {
		const indexOfFirstCombinator = input.indexOf(c)
		if (indexOfFirstCombinator !== -1) return indexOfFirstCombinator
	}
	return -1
}

async function getUtils(body, uno) {
	const classNames = expandVariantGroup(body)
		.split(/\s+/g)
		.map((className) => className.trim().replace(/\\/, ''))
	const utils = await parseUtils(classNames, uno)
	const sortedByRankIndex = utils.sort(([aIndex], [bIndex]) => aIndex - bIndex)
	const sortedByParentOrders = sortedByRankIndex.sort(
		([, , , aParent], [, , , bParent]) =>
			(aParent ? uno.parentOrders.get(aParent) ?? 0 : 0) -
			(bParent ? uno.parentOrders.get(bParent) ?? 0 : 0)
	)
	return sortedByParentOrders.reduce((acc, item) => {
		const [, selector, body2, parent] = item
		const sibling = acc.find(
			([, targetSelector, , targetParent]) => targetSelector === selector && targetParent === parent
		)
		if (sibling) sibling[2] += body2
		else acc.push([...item])
		return acc
	}, [])
}
async function parseUtils(classNames, uno) {
	const foundUtils = []
	for (const token of classNames) {
		const util = await uno.parseToken(token, '-')
		if (util) foundUtils.push(util)
		else warnOnce(`'${token}' not found. You have a typo or need to add a preset.`)
	}
	return foundUtils.flat()
}

async function transformApply(ctx) {
	const ast = parse(ctx.s.original, {
		parseAtrulePrelude: false,
		positions: true
	})
	if (ast.type !== 'StyleSheet') return ctx.s
	const stack = []
	walk(ast, (node) => {
		if (node.type === 'Rule') stack.push(handleApply(ctx, node))
	})
	await Promise.all(stack)
	return ctx.s
}
async function handleApply(ctx, node) {
	const parsePromises = node.block.children.map(async (childNode) => {
		await parseApply(ctx, node, childNode)
	})
	await Promise.all(parsePromises)
}
async function parseApply({ s, uno, applyVariables }, node, childNode) {
	const body = getChildNodeValue(childNode, applyVariables)
	if (!body) return
	const utils = await getUtils(body, uno)
	if (!utils.length) return
	for (const util of utils) writeUtilStyles(util, s, node, childNode)
	s.remove(childNode.loc.start.offset, childNode.loc.end.offset)
}
function getChildNodeValue(childNode, applyVariables) {
	if (
		childNode.type === 'Atrule' &&
		childNode.name === 'apply' &&
		childNode.prelude &&
		childNode.prelude.type === 'Raw'
	)
		return childNode.prelude.value.trim()
	if (
		childNode.type === 'Declaration' &&
		applyVariables.includes(childNode.property) &&
		childNode.value.type === 'Raw'
	)
		return removeOuterQuotes(childNode.value.value.trim())
}

const themeRE = /theme\((.+?)\)/g
function transformTheme(s, theme) {
	return s.replace(themeRE, (_, match) => {
		const argumentsWithoutQuotes = match.slice(1, -1)
		return getThemeValue(argumentsWithoutQuotes, theme)
	})
}
function getThemeValue(rawArguments, theme) {
	const keys = rawArguments.split('.')
	let current = theme
	for (const key of keys) {
		if (current[key] === void 0) throw new Error(`"${rawArguments}" is not found in your theme`)
		else current = current[key]
	}
	return current
}

const DEFAULT_APPLY_VARIABLES = ['--at-apply']
function checkForApply(content, _applyVariables) {
	if (_applyVariables === false) return { hasApply: false, applyVariables: [] }
	const applyVariables = toArray(_applyVariables || DEFAULT_APPLY_VARIABLES)
	return {
		hasApply: content.includes('@apply') || applyVariables.some((v) => content.includes(v)),
		applyVariables
	}
}
async function transformStyle({ content, uno, prepend, filename, applyVariables, hasThemeFn }) {
	const s = new MagicString(content)
	if (applyVariables?.length) await transformApply({ s, uno, applyVariables })
	if (hasThemeFn) transformTheme(s, uno.config.theme)
	if (!s.hasChanged()) return
	if (prepend) s.prepend(prepend)
	return {
		code: s.toString(),
		map: s.generateMap({ hires: true, source: filename || '' })
	}
}

function UnocssSveltePreprocess(options = {}, unoContextFromVite, isViteBuild) {
	if (!options.classPrefix) options.classPrefix = 'usp-'
	let uno
	return {
		markup: async ({ content, filename }) => {
			if (!uno) uno = await getGenerator(options.configOrPath, unoContextFromVite)
			if (isViteBuild && options.combine === void 0) options.combine = isViteBuild()
			return await transformClasses({ content, filename: filename || '', uno, options })
		},
		style: async ({ content, attributes, filename }) => {
			const svelte3AddPreflights = attributes['uno:preflights']
			const svelte3AddSafelist = attributes['uno:safelist']
			const svelte4DeprecatedAddPreflights = attributes.uno && attributes.preflights
			const svelte4DeprecatedAddSafelist = attributes.uno && attributes.safelist
			let addPreflights =
				attributes['uno-preflights'] || svelte3AddPreflights || svelte4DeprecatedAddPreflights
			let addSafelist =
				attributes['uno-safelist'] || svelte3AddSafelist || svelte4DeprecatedAddSafelist
			if (unoContextFromVite && (addPreflights || addSafelist)) {
				addPreflights = false
				addSafelist = false
				warnOnce(
					'Notice for those transitioning to @unocss/svelte-scoped/vite: uno-preflights and uno-safelist are only for use in component libraries. Please see the documentation for how to add preflights and safelist into your head tag. If you are consuming a component library built by @unocss/svelte-scoped/preprocess, you can ignore this upgrade notice.'
				)
			}
			const { hasApply, applyVariables } = checkForApply(content, options.applyVariables)
			const hasThemeFn = !!content.match(themeRE)
			const changeNeeded = addPreflights || addSafelist || hasApply || hasThemeFn
			if (!changeNeeded) return
			if (!uno) uno = await getGenerator(options.configOrPath)
			let preflightsSafelistCss = ''
			if (addPreflights || addSafelist) {
				const { css } = await uno.generate([], {
					preflights: !!addPreflights,
					safelist: !!addSafelist,
					minify: true
				})
				preflightsSafelistCss = wrapSelectorsWithGlobal(css)
			}
			if (hasApply || hasThemeFn) {
				return await transformStyle({
					content,
					uno,
					filename,
					prepend: preflightsSafelistCss,
					applyVariables,
					hasThemeFn
				})
			}
			if (preflightsSafelistCss) return { code: preflightsSafelistCss + content }
		}
	}
}
async function getGenerator(configOrPath, unoContextFromVite) {
	if (unoContextFromVite) {
		await unoContextFromVite.ready
		return unoContextFromVite.uno
	}
	const defaults = {
		presets: [presetUno()]
	}
	const { config } = await loadConfig(process.cwd(), configOrPath)
	return createGenerator(config, defaults)
}

export { UnocssSveltePreprocess as U }

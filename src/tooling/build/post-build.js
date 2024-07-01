import fs from 'node:fs'

const serverFilePath = './build/index.js'

const addCacheControl =
	"pathname.startsWith(`/${manifest.appDir}/immutable/`) || pathname.slice(-6) === '.woff2' || pathname.slice(-5) === '.woff' || pathname.slice(-4) === '.svg'"

const replaceCacheControl = async () => {
	try {
		const content = fs.readFileSync(serverFilePath, 'utf-8')
		const transformed = content.replace(
			'pathname.startsWith(`/${manifest.appDir}/immutable/`)',
			addCacheControl
		)
		fs.writeFileSync(serverFilePath, transformed)
	} catch (error) {
		console.error(error)
	}
	console.log('Cache control added')
}

export default replaceCacheControl()

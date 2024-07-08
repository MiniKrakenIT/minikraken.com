import fs from 'node:fs'

const serverFilePath = './build/handler.js'

const addCacheControl =
	"pathname.startsWith(`/${manifest.appDir}/immutable/`) || pathname.slice(-6) === '.woff2'"

const replaceCacheControl = async () => {
	try {
		const file = Bun.file(serverFilePath)
		const content = await file.text()
		const transformed = content.replace(
			'pathname.startsWith(`/${manifest.appDir}/immutable/`)',
			addCacheControl
		)
		await Bun.write(serverFilePath, transformed)
	} catch (error) {
		console.error(error)
	}
	console.log('Cache control added')
}

export default replaceCacheControl()

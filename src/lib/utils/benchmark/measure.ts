export const measure = <T extends (...arguments_: unknown[]) => ReturnType<T>>(
	messageOrFunction: string | T,
	function_?: T
): ReturnType<T> => {
	const message = typeof messageOrFunction === 'string' ? messageOrFunction : ''
	const function__ = typeof messageOrFunction === 'function' ? messageOrFunction : function_!

	const start = performance.now()

	const result = function__()

	console.log(`${message ? `${message}: ` : ''}Execution time: ${performance.now() - start}ms`)
	return result
}

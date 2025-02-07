export const measure = <T extends (...args: any[]) => any>(
	msgOrFn: string | T,
	fn?: T
): ReturnType<T> => {
	const msg = typeof msgOrFn === 'string' ? msgOrFn : ''
	const func = typeof msgOrFn === 'function' ? msgOrFn : fn!

	const start = performance.now()

	const result = func()

	console.log(`${msg ? `${msg}: ` : ''}Execution time: ${performance.now() - start}ms`)
	return result
}

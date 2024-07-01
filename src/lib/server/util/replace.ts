export const replace = (str: string, key: string, value: string): string => {
	const index = str.indexOf(key)
	return str.slice(0, index) + value + str.slice(index + key.length)
}

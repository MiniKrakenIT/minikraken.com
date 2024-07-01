export const arrayFrom = (arrayLike: HTMLCollection): Element[] => {
	const arr = []
	for (let i = 0, length = arrayLike.length; i < length; i++) {
		arr.push(arrayLike[i])
	}
	return arr
}

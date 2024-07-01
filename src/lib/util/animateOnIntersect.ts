export const animateOnIntersect = () => {
	const observer = new IntersectionObserver((entries) => {
		for (let i = 0, length = entries.length; i < length; i++) {
			const entry = entries[i]
			if (entry.isIntersecting) {
				entry.target.classList.add('appear')
				observer.unobserve(entry.target)
			}
		}
	})
	const elements = document.getElementsByClassName('appear-on-intersect')
	for (let i = 0, length = elements.length; i < length; i++) {
		observer.observe(elements[i])
	}
}

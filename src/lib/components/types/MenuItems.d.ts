export type MenuItems = Array<{
	name: string
	href: string
	subItems?: Array<{
		name: string
		href: string
	}>
}>

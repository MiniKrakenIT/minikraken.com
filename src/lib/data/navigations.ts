export interface Navigation {
	title: string
	href: string
}

export type Navigations = Navigation[]

export const headerNavigations: Navigations = [
	{
		title: 'Pricing',
		href: '/pricing'
	},
	{
		title: 'Company',
		href: '/company'
	},
	{
		title: 'Blog',
		href: '/blog'
	},
	{
		title: 'Over Ons',
		href: '/over-ons'
	}
]

export const footerNavigations: Navigations = [
	{
		title: 'Legal',
		href: '/legal'
	},
	{
		title: 'Partners',
		href: '/partners'
	},
	{
		title: 'Contact',
		href: '/contact'
	}
]

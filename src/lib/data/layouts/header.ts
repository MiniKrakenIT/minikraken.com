import { m } from '$paraglide/messages'

export const navigation = [
	[
		{
			page: '/realisations',
			label: m.nav_realisations()
		},
		{
			page: '/process',
			label: m.nav_our_process()
		}
	],
	[
		{
			page: '/about',
			label: m.nav_about_us()
		},
		{
			page: '/blog',
			label: m.nav_blog()
		}
	]
] as const

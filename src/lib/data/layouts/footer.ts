import socials from '$data/socials'
import { m } from '$paraglide/messages'

export const footer = [
	{
		sectionName: 'Company',
		items: [
			{
				page: '/about',
				label: m.nav_about_us()
			},
			{
				page: '/process',
				label: m.nav_our_process()
			},
			{
				page: '/blog',
				label: m.nav_blog()
			},
			{
				page: '/contact',
				label: m.nav_contact_button()
			}
		]
	},
	{
		sectionName: 'Links',
		items: [
			{
				page: '/legal/cookie-policy',
				label: m.legal_cookie_policy_name()
			},
			{
				page: '/legal/privacy-policy',
				label: m.legal_privacy_policy_name()
			},
			{
				page: '/legal/terms-of-service',
				label: m.legal_terms_of_service_name()
			},
			{
				page: '/sitemap.xml',
				label: 'Sitemap'
			}
		]
	},
	{
		sectionName: 'Connect',
		items: socials
	}
] as const

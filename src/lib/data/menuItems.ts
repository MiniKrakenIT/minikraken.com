import type { MenuItems } from '$components/types/MenuItems'
import { services } from '$lib/data/services'
import { caseStudies } from '$lib/data/caseStudies'
import { company } from '$lib/data/company'

export const menuItems: MenuItems = [
	{
		name: 'Diensten',
		href: '/diensten',
		subItems: services
	},
	{
		name: 'Case studies',
		href: '/case-studies',
		subItems: caseStudies
	},
	{
		name: 'Ons bedrijf',
		href: '/ons-bedrijf',
		subItems: company
	}
]

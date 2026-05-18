import { m } from '$paraglide/messages'

export const companyInfo = {
	city: 'Aalst',
	address: 'Dendermondse Steenweg',
	houseNumber: '56',
	postalCode: '9300',
	country: m.country(),
	mapsLink: 'https://maps.app.goo.gl/BtRbAd5hkE45VhqA8',
	phone: '+32 474 77 35 67'
} as const

export default companyInfo

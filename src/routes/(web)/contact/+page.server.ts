import { fail } from '@sveltejs/kit'
import { message, superValidate } from 'sveltekit-superforms'
import { valibot } from 'sveltekit-superforms/adapters'
import {
	custom,
	email,
	maxLength,
	minLength,
	number,
	object,
	pipe,
	string
} from 'valibot'
import type { Actions, PageServerLoad } from './$types'

const schema = object({
	name: pipe(
		string(),
		minLength(2, 'Naam is te kort'),
		maxLength(300, 'Naam is te lang')
	),
	email: pipe(
		string(),
		email(),
		minLength(5, 'Email is te kort.'),
		maxLength(300, 'Email is te lang.')
	),
	message: pipe(
		string(),
		minLength(1, 'Er moet een bericht aanwezig zijn om te sturen.'),
		maxLength(1000, 'Bericht is te lang. Maximaal 1000 karakters.')
	),
	date: pipe(
		number(),
		custom((input) => {
			if (typeof input === 'number') {
				return input + 3000 >= Date.now()
			}
			return false
		}, 'Er ging iets mis. (spam prevention)')
	),
	yourMomsName: pipe(
		string(),
		maxLength(0, 'Er ging iets mis. (spam prevention)')
	)
})

export const load: PageServerLoad = async () => {
	return { form: await superValidate(valibot(schema)) }
}

export const actions = {
	contact: async ({ request }) => {
		const form = await superValidate(request, valibot(schema))

		if (form.valid) {
			message(
				form,
				'Bedankt voor uw bericht wij contacteren u zo snel mogelijk!'
			)
		} else {
			fail(400, { form })
		}
	}
} satisfies Actions

import { fail } from '@sveltejs/kit'
import { message, superValidate } from 'sveltekit-superforms'
import { valibot } from 'sveltekit-superforms/adapters'
import { email, maxLength, minLength, number, object, pipe, string } from 'valibot'
import type { Actions, PageServerLoad } from './$types'

const schema = object({
	date: pipe(number('We verwachten hier een nummer input.')),
	email: pipe(
		string('We verwachten hier een text input.'),
		email('Formaat van het email adres is incorrect.'),
		minLength(5, 'Email is te kort.'),
		maxLength(300, 'Email is te lang.')
	),
	message: pipe(
		string('We verwachten hier een text input.'),
		minLength(1, 'Er moet een bericht aanwezig zijn om te sturen.'),
		maxLength(1000, 'Bericht is te lang. Maximaal 1000 karakters.')
	),
	name: pipe(
		string('We verwachten hier een text input.'),
		minLength(2, 'Naam is te kort'),
		maxLength(300, 'Naam is te lang')
	),
	yourMomsName: pipe(string('We verwachten hier een text input.'))
})

export const load: PageServerLoad = async () => {
	return { form: await superValidate(valibot(schema)) }
}

export const actions = {
	contact: async ({ request }) => {
		const form = await superValidate(request, valibot(schema))
		if (form.valid) {
			if (form.data.date + 3000 >= Date.now() || form.data.yourMomsName.length > 0) {
				return message(form, 'Er ging iets mis. (spam prevention)', {
					status: 400
				})
			}

			await new Promise((resolve) => setTimeout(resolve, 30_000))
			return { type: 'success', status: 200 }
		}

		return fail(400, { form })
	}
} satisfies Actions

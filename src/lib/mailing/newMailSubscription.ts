import { Resend } from '$lib/mailing/resend'

export type MailProperties = {
	client: {
		email: string
		name: string
		message: string
		subject: string
	}
}

export const newMailSubscription = async ({ client: { email } }: MailProperties) => {
	const { data, error } = await Resend.contacts.create({
		email: email,
		unsubscribed: false,
		audienceId: 'a844d1b1-40ae-474a-9042-3a56d50f1329'
	})

	if (error) {
		return console.error({ error })
	}

	console.log({ data })
}

import { Resend } from '$lib/logic/mailing/Resend'

export type MailProperties = {
	client: {
		email: string
		name: string
		message: string
		subject: string
	}
}

export const sendContactEmail = async ({ client: { email } }: MailProperties) => {
	const { data, error } = await Resend.emails.send({
		from: 'Maxime van MiniKraken <contact@minikraken.com>',
		to: [email],
		subject: 'Laten we van start gaan!',
		html: '<strong>It works!</strong>'
	})

	if (error) {
		return console.error({ error })
	}

	console.log({ data })
}

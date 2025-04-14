import { env } from '$env/dynamic/private'
import { Resend as ResendApi } from 'resend'

export const Resend = new ResendApi(env.RESEND_KEY ?? '')

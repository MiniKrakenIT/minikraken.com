import { Resend as ResendApi } from 'resend'
import { env } from '$env/dynamic/private'

export const Resend = new ResendApi(env.RESEND_KEY ?? '')

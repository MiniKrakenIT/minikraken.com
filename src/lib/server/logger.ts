import pino, { type TransportTargetOptions } from 'pino'
import { env } from '$env/dynamic/private'
import { env as publicEnv } from '$env/dynamic/public'

const prodTargets: TransportTargetOptions[] = [
	{
		target: 'pino/file',
		options: { destination: 1 }
	},
	{
		target: '@axiomhq/pino',
		options: {
			dataset: env.AXIOM_DATASET,
			token: env.AXIOM_TOKEN
		}
	}
]

const devTargets: TransportTargetOptions[] = [
	{
		target: 'pino-pretty',
		options: {
			colorize: true
		}
	}
]

export const logger = pino({
	level: env.LOG_LEVEL ?? 'info',
	base: {
		runtime: {
			service: 'minikraken-fe',
			env: publicEnv.PUBLIC_ENV
		}
	},
	transport: {
		targets: import.meta.env.MODE === 'development' ? devTargets : prodTargets
	}
})

import pino, { type TransportTargetOptions } from 'pino'
import { env } from '$env/dynamic/private'

const targets: TransportTargetOptions[] = []

if (env.AXIOM_TOKEN && env.AXIOM_DATASET) {
	targets.push({
		target: '@axiomhq/pino',
		options: {
			dataset: env.AXIOM_DATASET,
			token: env.AXIOM_TOKEN
		}
	})
}

if (import.meta.env.PROD)
	targets.push({
		target: 'pino/file',
		options: { destination: 1 }
	})
else
	targets.push({
		target: 'pino-pretty',
		options: {
			colorize: true
		}
	})

export const logger = pino({
	level: env.LOG_LEVEL ?? 'info',
	base: {
		runtime: {
			service: 'minikraken-fe',
			env: import.meta.env.MODE
		}
	},
	transport: {
		targets
	}
})

// src/hooks.server.ts
import { OTEL_KEY, OTEL_DATASET, OTEL_ENDPOINT } from '$env/static/private'
import { NodeSDK } from '@opentelemetry/sdk-node'
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-proto'
import { BatchSpanProcessor } from '@opentelemetry/sdk-trace-base'
import { resourceFromAttributes } from '@opentelemetry/resources'
import { ATTR_SERVICE_NAME, ATTR_SERVICE_VERSION } from '@opentelemetry/semantic-conventions'
import { ATTR_DEPLOYMENT_ENVIRONMENT_NAME } from '@opentelemetry/semantic-conventions/incubating'
import { dev } from '$app/environment'
import { version } from '../package.json'
import { UndiciInstrumentation } from '@opentelemetry/instrumentation-undici'
import { createAddHookMessageChannel } from 'import-in-the-middle'
import { register } from 'node:module'

const { registerOptions } = createAddHookMessageChannel()
register('import-in-the-middle/hook.mjs', import.meta.url, registerOptions)

const sdk = new NodeSDK({
	resourceDetectors: [],
	resource: resourceFromAttributes({
		[ATTR_SERVICE_NAME]: 'minikraken-dot-com',
		[ATTR_SERVICE_VERSION]: version,
		[ATTR_DEPLOYMENT_ENVIRONMENT_NAME]: dev ? 'development' : 'production'
	}),
	spanProcessors: [
		new BatchSpanProcessor(
			new OTLPTraceExporter({
				url: OTEL_ENDPOINT,
				headers: {
					Authorization: `Bearer ${OTEL_KEY}`,
					'X-Axiom-Dataset': OTEL_DATASET
				}
			})
		)
	],
	instrumentations: [
		new UndiciInstrumentation({
			/*ignoreRequestHook: (request) => {
				const url = request.path ?? ''
				return url.startsWith('/_app') || url === '/favicon.ico'
			}*/
		})
	]
})

sdk.start()

process.on('sveltekit:shutdown', () => {
	sdk.shutdown().catch(console.error)
})

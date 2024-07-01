import { onCLS, onFCP, onLCP } from 'web-vitals'
import { createApiReporter, getDeviceInfo } from 'web-vitals-reporter'

// Init report callback with information about the browser.
const sendToAnalytics = createApiReporter('/api/analytics', { initial: getDeviceInfo() })

// Setup web-vitals
onLCP(sendToAnalytics)
onFCP(sendToAnalytics)
onCLS(sendToAnalytics)

//screenSizeListener()

//export const handleError = Sentry.handleErrorWithSentry()

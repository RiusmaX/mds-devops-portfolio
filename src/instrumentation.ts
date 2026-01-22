import { registerOTel } from '@vercel/otel'

export function register() {
  console.log('🚧 [Instrumentation] Registering OpenTelemetry...');
  console.log('🚧 [Instrumentation] Endpoint:', process.env.OTEL_EXPORTER_OTLP_ENDPOINT ? 'Defined' : 'Missing');
  console.log('🚧 [Instrumentation] Service Name:', process.env.OTEL_SERVICE_NAME);

  registerOTel({
    serviceName: process.env.OTEL_SERVICE_NAME || 'portfolio-app',
  })
  console.log('✅ [Instrumentation] OpenTelemetry registered');
}

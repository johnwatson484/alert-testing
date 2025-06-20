import 'log-timestamp'
import { useAzureMonitor } from '@azure/monitor-opentelemetry'
import { createServer } from './server.js'

const init = async () => {
  useAzureMonitor()

  const server = await createServer()
  await server.start()
  console.log('Server running on %s', server.info.uri)
}

await init()

import 'log-timestamp'
import appInsights from 'applicationinsights'
import { createServer } from './server.js'

const init = async () => {
  appInsights.setup()
  appInsights.defaultClient.context.tags[appInsights.defaultClient.context.keys.cloudRole] = 'alert-testing'
  appInsights.start()
  const server = await createServer()
  await server.start()
  console.log('Server running on %s', server.info.uri)
}

await init()

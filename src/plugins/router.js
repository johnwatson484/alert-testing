import home from '../routes/home.js'
import assets from '../routes/assets.js'
import health from '../routes/health.js'
import errors from '../routes/errors.js'

const plugin = {
  name: 'router',
  register: (server, options) => {
    server.route([].concat(
      home,
      assets,
      health,
      errors
    ))
  },
}

export default plugin

import Boom from '@hapi/boom'

const routes = [{
  method: 'GET',
  path: '/404',
  handler: (request, h) => {
    return Boom.notFound('Page not found')
  },
}, {
  method: 'GET',
  path: '/500',
  handler: (request, h) => {
    return Boom.internal('Internal server error')
  }
}, {
  method: 'GET',
  path: '/400',
  handler: (request, h) => {
    return Boom.badRequest('Bad request')
  }
}, {
  method: 'GET',
  path: '/403',
  handler: (request, h) => {
    return Boom.forbidden('Forbidden')
  }
}, {
  method: 'GET',
  path: '/401',
  handler: (request, h) => {
    return Boom.unauthorized('Unauthorized')
  }
}]

export default routes

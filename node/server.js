'use strict'

const Hapi = require('hapi')

// Create a server with a host and port
const server = Hapi.server({
  host: 'localhost',
  port: 8000
})

server.route({ method: 'GET', path: '/status', handler: () => 'ok' })

server.route([
  {
    method: 'GET',
    path: '/api',
    handler: function (request, h) {
      return 'API OK'
    }
  },
  {
    method: 'POST',
    path: '/api/addresses/pools',
    handler: function (request, h) {
      console.log(request.payload)
      return [request.payload]
    }
  },
  {
    method: 'GET',
    path: '/api/transactions/{id}',
    handler: function (request, h) {
      return []
    }
  }
])

// Start the server
async function start () {
  try {
    await server.start()
  } catch (err) {
    console.log(err)
    process.exit(1)
  }

  console.log('Server running at:', server.info.uri)
};

async function stop () {
  try {
    await server.stop()
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}

module.exports = {
  start: start,
  stop: stop
}

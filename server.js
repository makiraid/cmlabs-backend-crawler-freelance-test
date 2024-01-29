#!/usr/bin/env node
'use strict'

// module dependencies
const app = require('./app')
const http = require('http')

const { logger } = require('./app/helper/logger')

// create http server
const httpPort = normalizePort(process.env.PORT || 3000)

app.set('port', httpPort)
const httpServer = http.createServer(app)

// listen on provided ports
httpServer.listen(httpPort)

// add error handler
httpServer.on('error', onError)

// start listening on port
httpServer.on('listening', onListening)

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort (val) {
  const port = parseInt(val, 10)

  if (isNaN(port)) {
    // named pipe
    return val
  }

  if (port >= 0) {
    // port number
    return port
  }

  return false
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError (error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof httpPort === 'string' ? 'Pipe ' + httpPort : 'Port ' + httpPort

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      logger.info(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      logger.info(bind + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening () {
  const addr = httpServer.address()
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
  logger.info('Listening on ' + bind)
}

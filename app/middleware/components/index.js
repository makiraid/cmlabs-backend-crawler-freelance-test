'use strict'

/**
 * Module dependencies.
 * @private
 */
const express = require('express')
const helmet = require('helmet')
const requestIp = require('request-ip')
const responseTime = require('response-time')
const bodyParser = require('body-parser')
const cors = require('./cors')

// const sentry = require('./sentry')

/**
 * Initialization middleware, exposing the
 * request and response to each other, as well
 * as defaulting the X-Powered-By header field.
 *
 * @param {Function<Express.Application>} app
 *
 * @public
 */
const init = app => {
  // load some middleware component
  // sentry.init(app)

  app.use(helmet())
  app.use(responseTime())
  app.enable('trust proxy')
  app.disable('x-powered-by')

  cors(app)

  app.use(express.json({ limit: '20mb' }))
  app.use(express.urlencoded({ limit: '20mb', extended: true }))
  app.use(bodyParser.text({ type: 'application/json' }))
  app.use(requestIp.mw())
}

module.exports.init = init

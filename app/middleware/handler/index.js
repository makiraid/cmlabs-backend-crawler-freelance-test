'use strict'

/**
 * Module dependencies.
 * @private
 */
const Sentry = require('../components/sentry').Sentry
const handleError = require('./errors')

/**
 * Module variables.
 * @private
 */

module.exports.init = app => {
  app.use(function (req, _, next) {
    Sentry.getCurrentScope()
      .setTag('ip_address', req.clientIp)
      .setTag('http.method', req.method)
      .setTag('http.url.path', req.path)

    next()
  })
}

module.exports.errors = handleError

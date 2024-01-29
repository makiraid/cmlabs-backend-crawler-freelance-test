'use strict'

/**
 * Module dependencies.
 * @private
 */
const Sentry = require('@sentry/node')
const AppConfig = require('../../conf/app_config')
const { name: AppName, version: AppVersion } = require('../../../package.json')

/**
 * Module variables.
 * @private
 */
const initSentry = app => {
  Sentry.init({
    dsn: AppConfig.getConfig().sentry.dsn,
    release: `${AppName}@${AppVersion}`,
    environment: AppConfig.getConfig().application.environment,
    integrations: [
      // enable HTTP calls tracing
      new Sentry.Integrations.Http({ tracing: true }),
      // enable Express.js middleware tracing
      new Sentry.Integrations.Express({ app })
    ],
    tracesSampleRate: 0.0, // Be sure to lower this in production
    beforeSend: (event, hint) => {
      // for development purpose only
      if (AppConfig.getConfig().application.environment !== 'production') {
        console.log('Sentry Event Exception')
        console.error(hint.originalException || hint.syntheticException)
        return null
      }

      return event
    }
  })
}

/**
 * @param {Function<Express.Application>} app
 *
 * @public
 */
const init = app => {
  // init sentry configuration
  initSentry(app)
  // Sentry Request Handler
  app.use(Sentry.Handlers.requestHandler())
  // Sentry Performance to trace every incoming request
  app.use(Sentry.Handlers.tracingHandler())
}

/**
 * @param {Function<Express.Application>} app
 *
 * @public
 */
const errorHandler = app => {
  app.use(
    Sentry.Handlers.errorHandler({
      shouldHandleError (error) {
        return error.errorType === undefined && error.errorForm === undefined
      }
    })
  )
}

module.exports.init = init
module.exports.errorHandler = errorHandler
module.exports.Sentry = Sentry

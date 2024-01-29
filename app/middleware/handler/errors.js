'use strict'

/**
 * Module dependencies.
 * @private
 */
const vsprintf = require('sprintf-js').vsprintf

const ErrorConstans = require('../../conf/constants').Error
const { Sentry, errorHandler: sentryErrorHandler } = require('../components/sentry')
const ServiceError = require('../../errors/ServiceError')

/**
 * Initialization middleware,
 * exposing the response fails to each other.
 *
 * This allows you to do intercept with the response before calls to the next()
 *
 * @return {Function}
 * @api private
 */
module.exports = app => {
  // Exposed Sentry.Handlers.errorHandler
  sentryErrorHandler(app)

  app.use((req, res, next) => {
    res.status(404).json({
      message: 'API Not Found'
    })
  })

  app.use((err, req, res, next) => {
    if (err instanceof ServiceError) {
      console.log(err)
    }

    let response = {
      message: 'Something wrong, please try again'
    }

    if (!err.errorForm && !err.errorType) {
      console.trace('[x] Error::middleware::handler::unknown_error', err)
      err.status = 500
      response = { ...response, type: 'unknown_error' }
    } else {
      err.status = 422
      if (err.errorForm) {
        response = {
          ...response,
          message: err.errorMessage || ErrorConstans.default_form_error,
          errors: err.errorForm,
          type: err.errorType
        }
      } else {
        const args = err.errorArgs || []
        let message

        if (!ErrorConstans[err.errorType]) {
          message = 'Error message not defined (' + err.errorType + ')'
          Sentry.captureException(new Error(message))
        } else {
          message = vsprintf(ErrorConstans[err.errorType], args)
        }

        response = {
          ...response,
          message,
          type: err.errorType
        }
      }

      if (err.errorData) {
        response = {
          ...response,
          data: err.errorData
        }
      }
    }

    return res.status(err.status || 500).json(response)
  })
}

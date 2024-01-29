'use strict'

/**
 * Module dependencies.
 * @private
 */
const { version: appVersion } = require('../../package.json')

class HttpError extends Error {
  /**
   * Represents a generic HTTP errors response
   *
   * @param {Object} response
   * @param {string} response.message
   * @param {Object} response.config - configuration provided to `axios` for the request
   */
  constructor (response) {
    super()

    const config = { ...response.config }
    const message = response.statusCode
      ? `[HTTP ${response.statusCode}]`
      : (response.code || '')

    this.message = (message + ' Failed to execute request').trim()
    this.errorMessage = response.message
    this.errorType = 'http_request_failed'
    this.reason = response.reason
    this.details = {
      code: response.code,
      status: response.statusCode,
      url: config.url,
      method: config.method,
      timeout: config.timeout,
      body: config.data,
      headers: config.headers,
      response: response.data
    }

    this.version = appVersion
  }
}

module.exports = HttpError

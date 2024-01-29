'use strict'

const { v4: uuidv4 } = require('uuid')

const httpContext = require('../httpContext')

const setRequestId = (req, _res, next) => {
  const requestId = req.headers['x-app-request-id'] || uuidv4()

  httpContext.set('requestId', requestId)

  return next()
}

module.exports = setRequestId

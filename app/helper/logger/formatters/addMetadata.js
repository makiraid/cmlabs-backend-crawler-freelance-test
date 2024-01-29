'use strict'

const { format } = require('winston')

const httpContext = require('../httpContext')

module.exports = format((info) => {
  info.request_id = httpContext.get('requestId')
  info.user = httpContext.get('user')

  return info
})

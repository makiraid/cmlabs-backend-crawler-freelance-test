'use strict'

const { format } = require('winston')

const httpContext = require('../httpContext')

module.exports = format((info) => {
  info.httpRequest = httpContext.get('httpRequest')

  return info
})

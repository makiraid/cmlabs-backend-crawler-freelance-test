'use strict'

const httpContext = require('../httpContext')

module.exports = (req, _res, next) => {
  httpContext.set('httpRequest', {
    url: req.originalUrl,
    method: req.method
  })

  return next()
}

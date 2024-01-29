'use strict'

const httpContext = require('../httpContext')

module.exports = (req, _res, next) => {
  httpContext.set('user', { id: req.userdata?.id })

  return next()
}

'use strict'
const { validationMiddleware } = require('./util')

module.exports = validationMiddleware({
  Crawler: require('./crawler')
})

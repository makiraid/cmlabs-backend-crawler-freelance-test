'use strict'

/**
 * Module dependencies.
 * @private
 */
const cors = require('cors')

/**
 * Configuring CORS
 *
 * @param {Function<Express.Application>} app
 *
 * @public
 */
module.exports = app => {
  app.use(cors())

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

    next()
  })
}

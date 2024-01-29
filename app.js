'use strict'

require('dotenv').config()

/**
 * Module dependencies.
 * @private
 */
const express = require('express')
const middlewareHandler = require('./app/middleware/handler')
const middlewareComponent = require('./app/middleware/components')
const routes = require('./app/routes')
const app = express()

middlewareComponent.init(app)
middlewareHandler.init(app)

routes(app)
app.use('/output', express.static('result'))

middlewareHandler.errors(app)

module.exports = app

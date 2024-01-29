'use strict'

const WinstonLogger = require('./WinstonLogger')
const RequestLogger = require('./RequestLogger')
const AppLogger = require('./AppLogger')
const middlewares = require('./middlewares')

const logger = new AppLogger(WinstonLogger)
const requestLogger = new AppLogger(RequestLogger)

module.exports = { logger, requestLogger, middlewares }

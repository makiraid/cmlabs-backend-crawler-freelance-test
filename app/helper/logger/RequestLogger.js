'use strict'

const { createLogger, format } = require('winston')

const { addMetadata } = require('./formatters')
const { Console } = require('./transports')
const AppConfig = require('../../conf/app_config')

const { combine, timestamp, errors, json } = format

const RequestLogger = createLogger({
  format: combine(errors({ stack: true }), addMetadata(), json(), timestamp()),
  transports: [new Console({ level: AppConfig.getConfig().application.log_level || 'info' })]
})

module.exports = RequestLogger

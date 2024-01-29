'use strict'

class AppLogger {
  constructor (logger) {
    this.logger = logger
  }

  warn (log) {
    this.logger.warn(log)
  }

  info (log) {
    this.logger.info(log)
  }

  log (level, log) {
    this.logger.log(level, log)
  }

  error (error) {
    this.logger.error(error)
  }
}

module.exports = AppLogger

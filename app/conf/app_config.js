'use strict'

const config = {
  application: {
    environment: process.env.NODE_ENV,
    log_level: process.env.LOG_LEVEL,
    timezone: process.env.TZ,
    hostname: process.env.HOSTNAME
  },
  database: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT || 3306
  },
  sentry: {
    dsn: process.env.SENTRY_DSN
  }
}

module.exports = {
  /**
   * @description Get Config value
   *
   * @returns {Object}
   */
  getConfig: function () {
    return Object.freeze(config)
  }
}

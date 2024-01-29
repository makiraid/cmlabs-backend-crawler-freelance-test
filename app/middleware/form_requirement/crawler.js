'use strict'

const { query } = require('express-validator')

module.exports = {
  crawl: [
    query('url')
      .isURL({
        require_protocol: true,
        require_host: true,
        require_valid_protocol: true
      })
      .withMessage('invalid url'),
  ]
}

'use strict'

const { URL } = require('url')

/**
 * Returns the hostname of the given URL.
 *
 * @param {string} url
 *
 * @return {string}
 */
module.exports = (url) => new URL(url).hostname

'use strict'

const path = require('path')
const fs = require('fs')

const Scraper = require('../scraper')
const urlParser = require('../../helper/urlParser')
const ServiceError = require('../../errors/ServiceError')

class Crawler {
  /**
   * Asynchronously processes the given URL and host.
   *
   * @param {string} url - the URL to process
   * @param {string} host - the host to process
   *
   * @return {Promise<Object>}
   */
  async process (url, host) {
    try {
      const dirPath = path.resolve('./output', urlParser(url))

      if (fs.existsSync(dirPath)) {
        return {
          status: false,
          message: 'already exists',
          data: `${host}/output/${urlParser(url)}`
        }
      }

      await Scraper.process(url)

      return {
        status: true,
        message: 'success',
        data:`${host}/output/${urlParser(url)}`
      }
    } catch (error) {
      throw new ServiceError(error.message)
    }
  }
}

module.exports = new Crawler()

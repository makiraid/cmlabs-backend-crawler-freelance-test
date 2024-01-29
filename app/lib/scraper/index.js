'use strict'

const path = require('path')
const urlParser = require('../../helper/urlParser')

// ES Module
const WebsiteScraper = import('website-scraper').then(mod => mod)

class Scraper {
  /**
   * Scrapes the specified URL for images, stylesheets, and scripts and saves them to the result directory.
   *
   * @param {string} url
   *
   * @return {Promise<void>}
   */
  async process (url) {
    const Scraper = (await WebsiteScraper).default

    const options = {
      urls: [url],
      directory: path.resolve('./output', urlParser(url)),
      recursive: true,
      maxDepth: 1,
      maxRecursiveDepth: 1,
      sources: [
        { selector: 'img', attr: 'src' },
        { selector: 'link[rel="stylesheet"]', attr: 'href' },
        { selector: 'script', attr: 'src' }
      ],
      subdirectories: [
        { directory: 'favicon', extensions: ['.ico'] },
        { directory: 'img', extensions: ['.jpg', '.jpeg', '.png', '.svg', '.gif', '.webp'] },
        { directory: 'js', extensions: ['.js', '.mjs', '.cjs', '.esm', '.jsx'] },
        { directory: 'css', extensions: ['.css', '.scss', '.sass', '.less'] },
        { directory: 'fonts', extensions: ['.ttf', '.otf', '.woff', '.woff2', '.eot'] }
      ]
    }

    await Scraper(options)
  }
}

module.exports = new Scraper()

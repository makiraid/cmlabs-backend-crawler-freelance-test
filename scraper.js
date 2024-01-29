const path = require('path')
const WebsiteScraper = import('website-scraper').then(mod => mod)

const urlParser = require('./app/helper/urlParser')

;(async () => {

  const Scraper = (await WebsiteScraper).default

  const url = 'https://cmlabs.co/

  await Scraper({
    urls: [url],
    directory: path.resolve('./output', urlParser(url)),
    recursive: true,
    maxDepth: 2,
    maxRecursiveDepth: 2,
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
  })
})()
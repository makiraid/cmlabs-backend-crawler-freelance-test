'use strict'

const router = require('express').Router()

const CrawlerRequirement = require('../middleware/form_requirement').Crawler
const Crawler = require('../lib/crawler')

router.post('/api', CrawlerRequirement.crawl, (req, res, next) => {
  const { url } = req.query
  const { host } = req.headers

  return Crawler.process(url, host)
    .then(response => res.json(response))
    .catch(error => next(error))
})

module.exports = router
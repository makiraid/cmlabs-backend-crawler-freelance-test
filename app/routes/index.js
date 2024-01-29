'use strict'

function router (app) {
  app.use('/health', require('./health'))
  app.use('/crawler', require('./crawler'))
}

module.exports = router

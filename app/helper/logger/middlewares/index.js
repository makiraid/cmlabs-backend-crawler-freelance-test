'use strict'

const httpContext = require('../httpContext')

const setRequestId = require('./setRequestId')
// const setUserIdentity = require('./setUserIdentity')
const setHttpDetail = require('./setHttpDetail')

module.exports = [httpContext.middleware, setRequestId]
// module.exports.setUserIdentity = setUserIdentity
module.exports.setHttpDetail = setHttpDetail

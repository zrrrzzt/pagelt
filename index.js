'use strict'

const validUrl = require('valid-url')
const getPage = require('./lib/get-page')

module.exports = (uri, callback) => {

  if (!uri) {
    return callback(new Error('Missing required param'), null)
  }

  if(!validUrl.isWebUri(uri)){
    return callback(new Error('Invalid uri'), null)
  }

  const start = new Date().getTime()

  getPage(uri)
    .then(result => {
      const end = new Date().getTime()
      return callback(null, {start: start, end: end, ms: end - start, status: result.statusCode})
    })
    .catch(error => callback(error, null))
}

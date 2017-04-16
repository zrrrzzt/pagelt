'use strict'

module.exports = url => {
  const protocol = /https/.test(url) ? 'https' : 'http'
  const http = require(protocol)
  return new Promise((resolve, reject) => {
    let body = ''
    let statusCode = ''
    http.get(url, response => {
      statusCode = response.statusCode

      response.on('data', chunk => {
        body += chunk.toString()
      })

      response.on('end', () => {
        resolve({statusCode: statusCode, body: body})
      })
    }).on('error', (error) => {
      reject(error)
    })
  })
}
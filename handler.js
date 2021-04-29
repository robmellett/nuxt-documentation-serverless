const sls = require('serverless-http')
const binaryMimeTypes = require('./binaryMimeTypes')
const nuxt = require('./nuxtBuild')

module.exports.handler = sls(nuxt, {
    binary: binaryMimeTypes
})
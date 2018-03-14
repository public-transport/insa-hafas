'use strict'

const createClient = require('hafas-client')
const insaProfile = require('hafas-client/p/insa')

const client = createClient(insaProfile)

module.exports = client

'use strict'

const createClient = require('hafas-client')
const insaProfile = require('hafas-client/p/insa')

const createInsaHafas = (userAgent, opt = {}) => {
	return createClient(insaProfile, userAgent, opt)
}

module.exports = createInsaHafas

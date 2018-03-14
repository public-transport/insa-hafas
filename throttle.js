'use strict'

const createThrottledClient = require('hafas-client/throttle')
const insaProfile = require('hafas-client/p/insa')

const throttle = (limit = 5, interval = 1000) => {
	return createThrottledClient(insaProfile, limit, interval)
}

module.exports = throttle

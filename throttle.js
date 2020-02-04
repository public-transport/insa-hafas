'use strict'

const createClient = require('hafas-client')
const withThrottling = require('hafas-client/throttle')
const insaProfile = require('hafas-client/p/insa')

const createThrottledClient = (userAgent, opt = {}) => {
	const {
		throttlingLimit: limit,
		throttlingInterval: interval
	} = {
		throttlingLimit: 5,
		throttlingInterval: 1000, // 1s
		...opt
	}

	const throttledProfile = withThrottling(insaProfile, limit, interval)
	return createClient(throttledProfile, userAgent, opt)
}

module.exports = createThrottledClient

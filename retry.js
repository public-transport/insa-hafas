'use strict'

const createClient = require('hafas-client')
const withRetrying = require('hafas-client/retry')
const insaProfile = require('hafas-client/p/insa')

const createRetryingClient = (userAgent, opt = {}) => {
	const {retryOpts} = {retryOpts: {}, ...opt}

	const retryingProfile = withRetrying(insaProfile, retryOpts)
	return createClient(retryingProfile, userAgent, opt)
}

module.exports = createRetryingClient

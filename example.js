'use strict'

const hafas = require('.')

const magdeburgNeustadt = '008010226'
const magdeburgBuckau = '008013456'

hafas.journeys(magdeburgNeustadt, magdeburgBuckau, {results: 1})
// .then(([journey]) => {
// 	const leg = journey.legs[0]
// 	return hafas.journeyLeg(leg.id, leg.line.name)
// })

// hafas.departures(magdeburgNeustadt, { duration: 5 })
// hafas.locations('Magdeburg Hbf', {results: 2})
// hafas.locations('Kunstmuseum Kloster Unser Lieben Frauen Magdeburg', {results: 2})
// hafas.location(magdeburgNeustadt)
// hafas.nearby({
// 	type: 'location',
// 	latitude: 52.148842,
// 	longitude: 11.641705
// }, {distance: 200})
// hafas.radar(52.148364, 11.600826, 52.108486, 11.651451, {results: 10})

.then(data => {
	console.log(require('util').inspect(data, { depth: null }))
})
.catch(console.error)

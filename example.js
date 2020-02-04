'use strict'

const {inspect} = require('util')
const createHafas = require('.')

const magdeburgNeustadt = '008010226'
const magdeburgBuckau = '008013456'

const hafas = createHafas('insa-hafas example')

hafas.journeys(magdeburgNeustadt, magdeburgBuckau, {results: 1})
// .then(({journeys}) => {
// 	const leg = journeys[0].legs.find(l => !!l.line)
// 	return hafas.trip(leg.tripId, leg.line.name)
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
// hafas.radar({
// 	north: 52.148364,
// 	west: 11.600826,
// 	south: 52.108486,
// 	east: 11.651451
// }, {results: 10})

.then(data => {
	console.log(inspect(data, {depth: null, colors: true}))
})
.catch(console.error)

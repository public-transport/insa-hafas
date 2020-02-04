# insa-hafas

**A client for the [public transport authority *Nahverkehr Sachsen-Anhalt* (NASA)](https://de.wikipedia.org/wiki/Nahverkehrsservice_Sachsen-Anhalt)/[INSA](https://insa.de).** It acts as a consistent and straightforward interface on top of a verbose API.

This project is actually a thin wrapper around [`hafas-client@5`](https://github.com/public-transport/hafas-client/tree/5#hafas-client). [Its docs](https://github.com/public-transport/hafas-client/tree/5/docs) document the API in general.

[![npm version](https://img.shields.io/npm/v/insa-hafas.svg)](https://www.npmjs.com/package/insa-hafas)
[![build status](https://api.travis-ci.org/derhuerst/insa-hafas.svg?branch=master)](https://travis-ci.org/derhuerst/insa-hafas)
[![dependency status](https://img.shields.io/david/derhuerst/insa-hafas.svg)](https://david-dm.org/derhuerst/insa-hafas)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/insa-hafas.svg)
[![chat on gitter](https://badges.gitter.im/derhuerst.svg)](https://gitter.im/derhuerst)
[![support me on Patreon](https://img.shields.io/badge/support%20me-on%20patreon-fa7664.svg)](https://patreon.com/derhuerst)


## Installing

```shell
npm install insa-hafas
```


## API

Check [the docs for `hafas-client@5`](https://github.com/public-transport/hafas-client/tree/5/docs) as well as [its INSA-specific customisations](https://github.com/public-transport/hafas-client/blob/5/p/insa/readme.md).


## Getting Started

```javascript
const hafas = require('insa-hafas')
```

As an example, we will search for a route from *Berlin Jungfernheide* to *München Hbf*. To get the station IDs, use [`locations(query, [opt])`](https://github.com/public-transport/hafas-client/blob/master/docs/locations.md).

```javascript
client.journeys('8011167', '8000261', {results: 1})
.then(({journeys}) => console.log(journeys[0]))
.catch(console.error)
```

The output will be an array of [`journey` objects in the *Friendly Public Transport Format* `1.2.1` format](https://github.com/public-transport/friendly-public-transport-format/tree/1.2.1/spec#journey):

```javascript
{
	type: 'journey',
	legs: [{
		mode: 'walking',
		public: true

		origin: {
			type: 'station',
			id: '8010226',
			name: 'Magdeburg-Neustadt',
			location: {
				type: 'location',
				latitude: 52.148842,
				longitude: 11.641705
			},
			products: {
				nationalExp: true,
				national: true,
				regional: true,
				suburban: true,
				bus: true,
				tram: true,
				tourismTrain: true
			}
		},
		departure: '2018-03-14T03:01:00.000+01:00',
		plannedDeparture: '2018-03-14T03:01:00.000+01:00',
		departureDelay: null,

		destination: {
			type: 'station',
			id: '7368',
			name: 'Magdeburg, S-Bahnhof Neustadt (Tram)',
			location: { /* … */ },
			products: { /* … */ }
		},
		arrival: '2018-03-14T03:06:00.000+01:00',
		plannedArrival: '2018-03-14T03:06:00.000+01:00',
		arrivalDelay: null,
	}, {
		tripId: '1|86821|1|80|14032018',
		direction: 'Alter Markt',
		line: {
			type: 'line',
			id: 'n8',
			name: 'N8',
			public: true,
			product: 'tram',
			mode: 'train',
			operator: {
				type: 'operator',
				id: 'magdeburger-verkehrsbetriebe',
				name: 'Magdeburger Verkehrsbetriebe'
			}
		},

		origin: {
			type: 'station',
			id: '7368',
			name: 'Magdeburg, S-Bahnhof Neustadt (Tram)',
			location: { /* … */ },
			products: { /* … */ }
		},
		departure: '2018-03-14T03:06:00.000+01:00',
		plannedDeparture: '2018-03-14T03:05:00.000+01:00',
		departureDelay: 60,
		departurePlatform: null,
		plannedDeparturePlatform: null,

		destination: {
			type: 'station',
			id: '7333',
			name: 'Magdeburg, Alter Markt',
			location: { /* … */ },
			products: { /* … */ }
		},
		arrival: '2018-03-14T03:12:00.000+01:00',
		plannedArrival: '2018-03-14T03:12:00.000+01:00',
		arrivalDelay: 0,
		arrivalPlatform: '2a',
		plannedArrivalPlatform: '1',

		alternatives: [{
			line: {
				type: 'line',
				id: 'str-n8',
				name: 'Str N8',
				public: true,
				product: 'tram',
				mode: 'train'
			},
			when: '2018-03-14T04:06:00.000+01:00'
		}]
	} /* … */ ]
}
```


## Similar Projects

- [*Friendly Public Transport Format*](https://github.com/public-transport/friendly-public-transport-format#friendly-public-transport-format-fptf) – A format for APIs, libraries and datasets containing and working with public transport data.
- [`db-hafas`](https://github.com/derhuerst/db-hafas) – JavaScript client for the DB HAFAS API.
- [`hafas-client`](https://github.com/derhuerst/hafas-client) – JavaScript client for HAFAS mobile APIs.
- [`hafas-departures-in-direction`](https://github.com/derhuerst/hafas-departures-in-direction#hafas-departures-in-direction) – Pass in a HAFAS client, get departures in a certain direction.
- [`hafas-collect-departures-at`](https://github.com/derhuerst/hafas-collect-departures-at#hafas-collect-departures-at) – Utility to collect departures, using any HAFAS client.
- [`hafas-discover-stations`](https://github.com/derhuerst/hafas-discover-stations#hafas-discover-stations) – Pass in a HAFAS client, discover stations by querying departures.
- [`hafas-rest-api`](https://github.com/derhuerst/hafas-rest-api#hafas-rest-api) – Expose a HAFAS client via an HTTP REST API.
- [`public-transport-enabler`](https://github.com/schildbach/public-transport-enabler) – Unleash public transport data in your Java project.


## Contributing

If you **have a question**, **found a bug** or want to **propose a feature**, have a look at [the issues page](https://github.com/derhuerst/insa-hafas/issues).

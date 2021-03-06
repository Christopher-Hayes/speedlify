module.exports = {
	name: 'Digital Surgeons',
	description: 'Digital Surgeons\' main agency website',
	options: {
		frequency: 60 * 24 * 1, // At most, every 1 day
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: 'site'
	},
	urls: [
		// DS
		'https://www.digitalsurgeons.com/',
		'https://www.digitalsurgeons.com/work/',
		'https://www.digitalsurgeons.com/thoughts/'
	]
};

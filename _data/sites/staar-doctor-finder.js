module.exports = {
	name: 'DS | Doctor Finder for STAAR Surgical',
	description: 'STAAR Surgical\'s Doctor Finder app, Built with ❤️ by DigitalSurgeons',
	options: {
		frequency: 60 * 24 * 1, // At most, every 1 day
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: 'site'
	},
	urls: [
		'https://us.doctors.discovericl.com/'
	]
};
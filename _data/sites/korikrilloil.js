module.exports = {
	name: 'Kori Krill Oil',
	description: 'Kori Krill Oil Craft+Shopify sites',
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	skip: !process.env.CONTEXT || process.env.SITE_NAME !== 'speedlify',
	options: {
		frequency: 60 * 23, // 23 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: 'site'
	},
	urls: [
		// Craft website
		// Homepage
		'https://korikrilloil.com/',
		// Why Kori page
		'https://www.korikrilloil.com/why-kori-krill-oil/superior-omega-3',
		// Shopify website
		// "Homepage"
		'https://shop.korikrilloil.com/',
		// Product page
		'https://shop.korikrilloil.com/collections/all-products/products/standard-1200-mg-softgels',
	]
};
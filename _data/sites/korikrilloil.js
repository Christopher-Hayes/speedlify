module.exports = {
	name: 'Kori Krill Oil',
	description: 'Kori Krill Oil Craft+Shopify sites',
	options: {
		frequency: 60 * 24 * 4, // Every 4 days
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: 'site'
	},
	urls: [
		// * Craft website
		// Homepage
		'https://korikrilloil.com/',
		// Why Kori page
		'https://www.korikrilloil.com/why-kori-krill-oil/superior-omega-3',
		// Benefits
		'https://www.korikrilloil.com/why-omega-3/health-benefits',

		// * Shopify website
		// "Homepage"
		'https://shop.korikrilloil.com/',
		// Product page
		'https://shop.korikrilloil.com/products/standard-1200-mg-softgels',
	]
};

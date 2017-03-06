module.exports = {
	// webpack folder's entry js - excluded from jekyll's build process
	entry: './webpack/entry.js',
	output: {
		path: '_assets/javascripts/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015']
				}
			}
		]
	}
};
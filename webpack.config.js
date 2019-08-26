const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
if (process.env.NODE_ENV === 'development') {
	require('dotenv').config({ path: '.env.development' });
}
module.exports = (env, argv) => {
	const isProduction = (env === 'production');
  	const MiniCssExtract = new MiniCssExtractPlugin({
    	filename: "style.css"
    });

	return {
		entry:['babel-polyfill', './src/app.js'],
		output: {
			path: path.join(__dirname, 'public', 'dist'),
			filename: 'bundle.js'
		},
		module: {
			rules: [{
				loader: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/
			}, {
				test: /\.s?css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
		    	]
			}]
		},
		plugins: [
			MiniCssExtract,
			new webpack.DefinePlugin({
				'process.env.ACCUWEATHER_API_KEY': JSON.stringify(process.env.ACCUWEATHER_API_KEY),
			})
		],
		devtool: isProduction ? 'source-map' : 'inline-source-map',
		devServer: {
			contentBase : path.join(__dirname, 'public'),
			historyApiFallback: true,
	      	publicPath: '/dist/' 
		}
	};
};
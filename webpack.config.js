var path = require("path");

var webpack = require('webpack')

module.exports = {
    entry: {
        sortme: "./src/sortme.class.js"
	},

    output: {
		path: path.join(__dirname, "build"),
		filename: "[name].js",
        library: ["[name]"],
		libraryTarget: "umd"
	},

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({ minimize: true })
    ]
};
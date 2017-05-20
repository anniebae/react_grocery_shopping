var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: {
        app: "./src/components/App"
    },
    output: {
        filename: "build/bundle.js",
        sourceMapFilename: "build/bundle.map"
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /.*\.(gif|png|jpe?g)$/i,
                use: [
                    {
                    loader: 'file-loader',
                }, {
                        loader: 'image-webpack-loader',
                        options: {
                            progressive: true,
                            optimizationLevel: 6,
                            interlaced: false,
                            pngquant: {
                                quality: '65-90', speed: 5
                            }
                        }
                    }
                ]
            }
        ]
    }
}
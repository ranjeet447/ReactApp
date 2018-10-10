const webpack = require('webpack');
const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
entry: './src/app/index.js',
module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: ['babel-loader']
        },
        {
            test: /\.css$/,
            use: [
                { loader: "style-loader/url" },
                { loader: "file-loader" }
            ]
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/,
            use: [
              {
                loader: "file-loader",
                options: {
                  outputPath: "assets/"
                }
              },
            //   "image-webpack-loader"
            ]
        }
    ]
},

resolve: {
    extensions: ['*', '.js', '.jsx']
},
output: {
    path: __dirname + '/dist/app',
    publicPath: '/app/',
    filename: 'bundle.js'
},
plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
        template:'./src/index.html',
        inject: true,
        favicon:"./src/favicon.ico"
    }),
],
devServer: {
    contentBase: path.join(__dirname, 'dist'),
    publicPath: '/app/',
    historyApiFallback: true,
    compress: true,
    hot: true,
    port: 8080,
    open: true,
    proxy: {
        "/api":"http://localhost:8000/",
        "/patients":"http://localhost:3000/",
    }
    
}
};
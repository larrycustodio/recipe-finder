const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Generates an HTML file with the script tag added,
// and minifies the html file
const htmlPlugin = new HtmlWebpackPlugin({
    template: './view/index.html',
    filename: './index.html'
})

// Webpack config
module.exports = {
    context: path.join(__dirname, 'src'),

    entry: {
        'bundle': './js/index'
    },

    resolve: {
        alias: {
            react: path.join(__dirname, 'node_modules', 'react')
        },
        extensions: ['.js', '.jsx']
    },

    output: {
        publicPath: '/',
        path: path.resolve(__dirname, './dist'),
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/, /server/],
                loader: 'babel-loader'
            }
        ]
    },
    //disable cache in watch mode
    cache: false,

    plugins: [htmlPlugin]
}
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Generates an HTML file with the script tag added,
// and minifies the html file
const htmlPlugin = new HtmlWebpackPlugin({
    template: './view/index.html',
    filename: './index.html'
})

// Extract the stylesheets into a dedicated file
const cssExtractPlugin = new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: "[id].css"
});

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

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/, /server/],
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                exclude: [/node_modules/],
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader' },
                    { loader: 'sass-loader', options: {} },
                ]
            }
        ]
    },
    //disable cache in watch mode
    cache: false,
    
    plugins: [htmlPlugin, cssExtractPlugin]
}
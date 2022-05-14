const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');
const {isProd, filename} = require('./webpack.const');

const plugins = () =>  {
    const base = [
      new HTMLWebpackPlugin({
          template: './public.html',
          minify: {
              collapseWhitespace: isProd
          }
      }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'public/favicon.ico'),
                    to: path.resolve(__dirname, 'dist'),
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: filename('css')
        })
    ]

    if(isProd) {
        base.push(new BundleAnalyzerPlugin())
    }

    return base
}

module.exports = {
    plugins
}
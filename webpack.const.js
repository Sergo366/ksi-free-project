const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

const cssLoaders = extra => {
    const loaders = [
        {
            loader: MiniCssExtractPlugin.loader,
            options: {
                hmr: isDev,
                reloadAll: true
            },
        },
        'css-loader'
    ]

    if (extra) {
        loaders.push(extra)
    }

    return loaders
}

module.exports = {
    isDev,
    isProd,
    filename,
    cssLoaders
}
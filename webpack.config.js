const {plugins} = require('./webpack.plugins');
const path = require('path');
const {isDev, isProd, cssLoaders} = require('./webpack.const')

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }

    if (isProd) {
        // config.minimizer = [
        //     new OptimizeCssAssetWebpackPlugin(),
        //     new TerserWebpackPlugin()
        // ]
    }
    return config
}

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: ['@babel/polyfill', './src/index.tsx']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: optimization(),
    devServer: {
        port: 4200,
        hot: isDev
    },
    // resolve: {
    //     resolve: {
    //         extensions: ['.js', '.json', '.png'],
    //         alias: {
    //             '@models': path.resolve(__dirname, 'src/models'),
    //             '@': path.resolve(__dirname, 'src'),
    //         }
    //     },
    // },
    devtool: isDev ? 'source-map' : '',
    plugins: plugins(),
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoaders('sass-loader')
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     use: jsLoaders()
            // },
            // {
            //     test: /\.ts$/,
            //     exclude: /node_modules/,
            //     loader: {
            //         loader: 'babel-loader',
            //         options: babelOptions('@babel/preset-typescript')
            //     }
            // },
            // {
            //     test: /\.jsx$/,
            //     exclude: /node_modules/,
            //     loader: {
            //         loader: 'babel-loader',
            //         options: babelOptions('@babel/preset-react')
            //     }
            // }
        ]
    }
}
const path = require('path'),
    glob = require('glob'),
    htmlWebpack = require('html-webpack-plugin'),
    uglifyJS = require('uglifyjs-webpack-plugin'),
    extractcss = require('extract-text-webpack-plugin'),
    purifycss = require('purifycss-webpack');

const websit = {
    pablicPath: path.resolve(__dirname, 'dist/')
}

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        entry: './entry',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: websit.pablicPath
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: extractcss.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'postcss-loader']
            })
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 500,
                    outputPath: 'img/'
                }
            }]
        },{
            test: /\.html$/,
            use: [{
                loader: 'html-withimg-loader'
            }]
        },{
            test: /\.(scss|sass)$/,
            use: extractcss.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'postcss-loader', 'sass-loader']
            })
        }, {
            test: /\.(jsx|js)$/,
            use: {
                loader: 'babel-loader'
            },
            exclude: /node_modules/
        }]
    },
    plugins: [
        new extractcss('css/style.css'),
        new htmlWebpack({
            minify: {
                removeAttributeQuotes: true
            },
            hash: true,
            template: './src/index.html'
        }),
        // new uglifyJS(),
        new purifycss({
            paths: glob.sync(path.join(__dirname, 'src/*.html'))
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 8080,
        compress: true,
        host: '192.168.31.104'
    }
}
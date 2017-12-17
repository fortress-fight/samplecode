const glob = require('glob'),
    path = require('path'),
    extractTextPlugin = require('extract-text-webpack-plugin'),
    htmlPlugin = require('html-webpack-plugin'),
    uglifyjs = require('uglifyjs-webpack-plugin'),
    purifycss = require('purifycss-webpack');

const PATH = {
    publicPath: path.resolve(__dirname, 'dist') + '/'
};

module.exports = {
    entry: {
        entry: './entry'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: PATH.publicPath
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'postcss-loader']
                })
            }, {
                test: /\.(html|htm)$/,
                use: ['html-withimg-loader']
            }, {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 500,
                        outputPath: "img/"
                    }
                }]
            }, {
                test: /\.less$/,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader'
                    }, {
                        loader: 'less-loader'
                    }]
                })
            }, {
                test: /\.(sass|scss)$/,
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader'
                    }, {
                        loader: 'sass-loader'
                    }]
                })
            }
            // {
            //     test: /\.css$/,
            //     use: [{
            //         loader: 'css',
            //         options: {

            //         }
            //     }]
            // }
        ]
    },
    plugins: [
        new extractTextPlugin('css/style.css'),
        new htmlPlugin({
            minify: {
                removeAttributeQuotes: true
            },
            hash: true,
            template: './src/index.html'
        }),
        new uglifyjs(),
        new purifycss({
            paths: glob.sync(path.join(__dirname, 'src/*.html'))
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        host: '192.168.31.104',
        port: 8081,
        compress: true
    }
}
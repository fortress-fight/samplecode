const path = require('path'),
    uglifyjs = require('uglifyjs-webpack-plugin'),
    htmlPlugin = require('html-webpack-plugin'),
    extractTextPlugin = require('extract-text-webpack-plugin');

const websit = {
    publicPath: path.resolve(__dirname, 'dist') + '/'
};

module.exports = {
    entry: {
        entry: './entry'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // 处理静态文件的路径问题
        publicPath: websit.publicPath
    },
    module: {
        rules: [
        //     {
        //     test: /\.css$/,
        //     use: ['style-loader', 'css-loader']
        // },
        {
            test: /\.css$/,
            use: extractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        },{
            test: /\.(png|jpg|gif)/,
            use: [{
                // url-loader 包含 file-loader 的功能
                loader: 'url-loader',
                options: {
                    // 如果图片 大于 5000 直接拷贝图片，小于 将图片转换成为 base64 位编码
                    limit: 5000,
                    outputPath: "img/"
                }
            }]
        }, {
            test: /\.(htm|html)$/,
            use: [{
                loader: 'html-withimg-loader'
            }]
        }]
    },
    plugins: [
        new uglifyjs(),
        new htmlPlugin({
            minify: {
                removeAttributeQuotes: true
            },
            hash: true,
            template: './src/index.html'
        }),
        new extractTextPlugin('css/style.css')
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        host: '192.168.31.104',
        port: 8080,
        compress: true
    }
}
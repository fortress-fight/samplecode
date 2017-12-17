const path = require('path');
const uglyfy = require('uglifyjs-webpack-plugin'),
    htmlplugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        entry: './src/entry'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            // 通过正则筛选
            test: /\.css$/,
            // 使用 指定 loader，写法 1
            // use: ['style-loader', 'css-loader']
            //写法 2
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }]

        }]
    },
    plugins: [
        new uglyfy(),
        new htmlplugin({
            // 压缩
            minify: {
                // 去除属性的双引号
                removeAttributeQuotes: true
            },
            // hash 后缀
            hash: true,
            // 以哪个为模板进行加载
            template: './src/index.html'
        })
    ],
    devServer: {
        // 服务启动的根目录
        contentBase: path.resolve(__dirname, 'dist'),
        // server 地址，本机 IP 地址
        host: 'localhost',
        // 服务器压缩
        compress: true,
        // 服务器端口
        port: 8080
    }
}
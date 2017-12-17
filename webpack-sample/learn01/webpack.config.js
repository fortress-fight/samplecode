const path = require('path');

module.exports = {
    entry: {
        // 入口配置项
        entry: './src/entery',
        entry2: './src/entry2'
    },
    output: {
        // 出口配置项
        // path -- 出口路径
        // filename -- 出口文件名
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        // 模块控制项（模块也就是各种引入的资源）

    },
    // 插件控制项，可能会存在多个插件
    plugins: [],
    devServer: {
        // 服务器控制项

    }
}
const path = require('path'),
    webpack = require('webpack'),
    htmlWebpck = require('html-webpack-plugin'),
    copyWebpckPlugin = require('copy-webpack-plugin');


// console.log(encodeURIComponent(process.env.type), '命令行参数--type')

// module.exports = env => {
//     console.log(env);
//     console.log('env-production', env.production);
//     console.log(env.NODE_ENV);
//     return {

//         entry: {
//             bundle: path.resolve(__dirname, 'entry'),
//             jquery: 'jquery'
//         },
//         output: {
//             path: path.resolve(__dirname, 'dist'),
//             filename: '[name].js'
//         },
//         plugins: [
//             // new webpack.ProvidePlugin({
//             //     $: 'jquery'
//             // }),
//             new htmlWebpck({
//                 minify: {
//                     removeAttributeQuotes: true
//                 },
//                 hash: true,
//                 template: './src/index.html'
//             })
//         ]
//     }
// };

// 

// CommonsChunkPlugin 示例1

// module.exports = {

//     entry: {
//         bundle: path.resolve(__dirname, 'entry'),
//         script1: path.resolve(__dirname, './src/js/script1'),
//         script2: path.resolve(__dirname, './src/js/script2')
//         // script2: [path.resolve(__dirname, './src/js/script'), 'vue']
//         // jquery: 'jquery',
//     },
//     output: {
//         path: path.resolve(__dirname, 'dist'),
//         filename: '[name].js'
//     },
//     plugins: [
//         new webpack.optimize.CommonsChunkPlugin({
//             // name: ['chunk', 'vue'],
//             name: ['chunk'],
//             // filename: '[name].js'
//             minChunks: 2
//         }),
//         new htmlWebpck({
//             minify: {
//                 removeAttributeQuotes: true
//             },
//             hash: true,
//             template: './src/index.html'
//         })
//     ]
// }


// CommonsChunkPlugin 示例2

module.exports = {

    entry: {
        bundle: path.resolve(__dirname, 'entry'),
        script1: [path.resolve(__dirname, './src/js/script1'), path.resolve(__dirname, './src/js/script2')],
        // script2: 
        // script2: [path.resolve(__dirname, './src/js/script'), 'vue']
        // jquery: 'jquery',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            // name: ['chunk', 'vue'],
            name: ['script1'],
            // filename: '[name].js'
            minChunks: 2
        }),
        new htmlWebpck({
            minify: {
                removeAttributeQuotes: true
            },
            hash: true,
            template: './src/index.html'
        }),
        new copyWebpckPlugin([{
            from: 'src/img',
            to: 'public'
        }])
    ]
}
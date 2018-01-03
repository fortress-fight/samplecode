exports.name = 'nodejs';
exports.data = 'this is a nodejs example';
exports.examplefn = function () {
    console.log('run a example')
}

// // 等价于

// module.exports = {
//     name: 'nodejs',
//     data: 'this is a nodejs example',
//     examplefn: function () {
//         console.log('run a example')
//     }
// }
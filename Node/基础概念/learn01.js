// let http = require('http'),
//     i = 0;

// http.createServer(function () {
//     console.log(i++);
// }).listen(3030);

// // 02

// console.log(0);
// setTimeout(() => {

//     console.log(1);
// }, 1000);

// console.log(2);

// // 03

// let stat = + new Date();

// setTimeout(() => {
//     console.log(stat - (+new Date()));
//     for (var i = 0; i < 1000000000; i++) {};
// }, 200);
// setTimeout(() => {
//     console.log(stat - (+new Date()));
// }, 400);

// // 04

// let http = require('http');

// http.createServer(function () {
//     console.log(1);
//     a()
// }).listen(3030);
// function a () {
//     console.log(2);
//     b();
// }
// function b () {
//     console.log(3)
// }

// // 05

// let http = require('http'), i = 0;
// http.createServer(function () {
//     i++;
//     a();
// }).listen(3030)

// function a () {
//     console.log(i);
//     if (i > 2) {
//         throw new Error('错误')
//     }
// }

// // 06

// let http = require('http'), i = 0, process=require('process');
// http.createServer(function () {
//     i++;
//     a();
// }).listen(3030)

// function a () {
//     console.log(i);
//     if (i > 1) {
//         throw new Error('错误')
//     }
// }

// process.on('uncaughtException', function (err) {
//     console.log(err);
// })

// // 07

// let fs = require('fs');
// fs.readFile('./ceshi.js', function (err, data) {
//     if (err) return console.error(err); // { Error: ENOENT: no such file or directory, open './ceshi.js' errno: -2, code: 'ENOENT', syscall: 'open', path: './ceshi.js' }
//     console.log(data);
// })

// // 08

// let http = require('http');

// http.createServer(function () {
//     console.log(1);
//     a()
// }).listen(3030);
// function a () {
//     console.log(2);
//     b();
// }
// function b () {
//     throw new Error('错误');
//     console.log(3);
// }

// 09

let http = require('http');

http.createServer(function () {
    console.log(1);
    a()
}).listen(3030);
function a () {
    console.log(2);
    b();
}
function b () {
    setTimeout(() => {
        throw new Error('错误');   
    });
    console.log(3);
}
// 01

// let space = 'global';
// {
//     let space = 'block';
//     console.log(space); // block
// }
// console.log(space); // global

// 02

// console.log(02);
// let sample02 = "sample02";
// let sample02 = "error"; // Identifier 'sample02' has already been declared

// const sample02 = "sample02";
// const sample02 = "error"; // Identifier 'sample02' has already been declared

// const sample02; // Missing initializer in const declaration

// 03

// console.log(sample3); // undefined
// var sample3 = 'sample03'; 

// console.log(sample3); // sample3 is not defined;
// let sample3 = 'sample03'; 

// console.log(sample3); // sample3 is not defined;
// const sample3 = 'sample03'; 

// 04

// console.log(sample4);
// {
//     var sample4 = "sample4";
// }
// console.log(sample4); // sample4

// {
//     let sample4 = "sample4";
// }
// console.log(sample4); // sample4 is not defined 

// 05

// let simple5 = 'simple00';
// {
//     console.log(simple5); // simple5 is not defined
//     let simple5 = 'simple5';
// }
// 执行到 console.log(sunoke5) 的时候， 系统向其所在的块级作用域查找 simple5 ，
// 但是系统查找到 let simple5 告诉系统 simple5 我已经预定了，如果你要找就不要向外面查了，

// 06

// const simple6 = {
//     name: 'const'
// };
// simple6.name = "constchange";
// simple6.val = "simple6";
// console.log(simple6); // { name: 'constchange', val: 'simple6' }

// const simple6 = {
//     name: 'const'
// };
// Object.freeze(simple6);
// simple6.name = "constchange";
// simple6.val = "simple6";
// console.log(simple6); // { name: 'const' }

// 07

// for (var i = 0; i < 6; i++) {
//     setTimeout(function () {
//         console.log(i) // 6 6 6 6 6 6
//     });
// }

// for (var i = 0; i < 6; i++) {
//     (function (j) {
//         setTimeout (function () {
//             console.log(j) // 0 1 2 3 4 5
//         })
//     })(i);
// }

for (let i = 0; i < 6; i++) {
    setTimeout (function () {
        console.log(i) // 0 1 2 3 4 5
    });
}

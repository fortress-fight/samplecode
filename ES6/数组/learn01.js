// // 01

// let example = new Array(3);

// console.log(example, example[0]) //(3) [empty × 3]length: 3__proto__: Array(0) undefined


// let example2 = new Array(3, '1');

// console.log(example2) // [3, '1']

// let example3 = Array.of(1);
// console.log(example3) // 1

// // 02

// let example = function () {
//     console.log(arguments); // { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
//     console.log(Array.prototype.slice.call(arguments)); // [ 1, 2, 3, 4, 5 ]
// };

// example(1,2,3,4,5);

// let example2 = function () {
//     console.log(arguments); // { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
//     console.log(Array.from(arguments)) // [ 1, 2, 3, 4, 5 ]
//     console.log(Array.from(arguments, function (value, index) {
//         console.log(this); // [Function: example2]
//         return value + '已经修改'
//     }, example2)); // [ '1已经修改', '2已经修改', '3已经修改', '4已经修改', '5已经修改' ]
// };

// example2(1,2,3,4,5);

// // 03

// let example = [1,2,1,124,112,12,245,121,31,];

// let result = example.find((value)=>value > 100)
// let result2 = example.findIndex((value)=>value > 100)
// console.log(result, result2); // 124 3

// // 04
// let example = [1, 2, 3, 4, 5, 7, 8];

// console.log(example.fill('fill', 3, 5)); // [ 1, 2, 3, 'fill', 'fill', 7, 8 ]
// console.log(example); // [ 1, 2, 3, 'fill', 'fill', 7, 8 ]

// 05
let example = ['a', 'b', 'c', 'X', 1, 2, 3, 4];

// 从 第4个的位置开始，将 0 - 3 位置的值，对剩余的进行重写
console.log(example.copyWithin(4, 0, 3)) // [ 'a', 'b', 'c', 'X', 'a', 'b', 'c', 4 ]


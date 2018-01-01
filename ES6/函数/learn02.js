// 01

// let example = () => 'example';
// console.log(example()) // example

// 相当于

// let example = function () {
//     return 'example'
// };

// console.log(example());

// // 02

// function name1() {}
// let name2 = function () {};
// let name3 = function name4() {};

// console.log(name1.name); // name1
// console.log(name2.name); // name2
// console.log(name3.name); // name3
// // console.log(name4.name); // name4 is no define

// console.log(new Function().name); // anonymous
// console.log(function () {}.bind(null).name); // bound

// // 03

// let example = value => value;

// console.log(example("将会直接返回")); // 将会直接返回

// // 相当于

// function example1 (value) {
//     return value;
// }

// console.log(example1("将会直接返回")) // 将会直接返回


// // 04

// let example = () => console.log('执行了')

// example(); // '执行了'

// let example2 = (num1, num2) => console.log(num1 + num2);

// example2(10, 20) // 30

// // 05

// let example = (name) => {
//     let init = "你好";
//     return init + name;
// }
// console.log(example("es2015")); // 你好es2015

// // 如果想通过箭头函数创建一个空的函数：
// let example2 = () => {};

// // 06

// let example = () => {
//     name: 'es6'
// }

// console.log(example()) // undefined

// let example02 = () => ({
//     name: 'es6'
// });

// console.log(example02()) //{ name: 'es6' }

// // 07

// let example = ((name) => {
//     let init = "Hello";
//     return init + name;
// })("es6");

// console.log(example) // Helloes6

// 08

// let example = {
//     id: '08',
//     _showId: function () {
//         console.log(this, this.id)
//     },
//     showId: function () {
//         setTimeout(function () {

//             console.log(this, this.id)
//         }, 200)
//     },
//     arrowShowId: function () {
//         setTimeout(() => {
//             console.log(this, this.id)
//         }, 200);
//     }
// }


// example.showId(); // window undefined
// example._showId(); // example 08
// example.arrowShowId(); // example 08

// // 09

// function Person (name) {
//     this.name = name
// }

// let person1 = new Person();
// let person2 = Person();

// console.log(typeof person1, typeof person2) // object undefined

// // 10

// function example () {
//     if (this instanceof example) {
//         console.log('通过 new 操作符来进行调用的')
//     } else {
//         console.log('直接执行了函数体')
//     }
// }

// example(); // 直接执行了函数体
// let ex = new example() // 通过 new 操作符来进行调用的

// // 11

// function example () {
//     if (new.target) {
//         console.log('通过 new 操作符来进行调用的')
//     } else {
//         console.log('直接执行了函数体')
//     }
// }

// example(); // 直接执行了函数体
// let ex = new example() // 通过 new 操作符来进行调用的

function e(obj) {
    if (obj instanceof e) return obj;
    if (!(this instanceof e)) return new e(obj);
}

let example = e('ex');
let example2 = e();
let example3 = e();
console.log(example.name, example2.name, example3.name)
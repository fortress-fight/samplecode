// function mixin (receiver, supplier) {
//     Object.keys(supplier).forEach(function (key) {
//         receiver[key] = supplier[key];
//     });
//     return receiver;
// }

// let example = {
//     name: 'example',
//     age: '24'
// };

// let person = {};

// mixin(person, example);
// console.log(person); // { name: 'example', age: '24' }

// let person2 = {};
// Object.assign(person2, example);
// console.log(person2); // { name: 'example', age: '24' }

// // 02

// let person = {
//     getGreeting () {
//         return 'Hello';
//     }
// }

// let dog = {
//     getGreeting () {
//         return 'wangwang'
//     }
// }

// let person1 = Object.create(person);
// console.log(Object.getPrototypeOf(person1) === person); // true

// // 这里我们将 person1 的原型修改到 dog 上

// Object.setPrototypeOf(person1, dog);
// console.log(person1.getGreeting()); // wangwang
// console.log(Object.getPrototypeOf(person1) === dog) // true

// // 03
// let person = {
//     getGreeting() {
//         return 'Hello';
//     },

//     say: () => {
//         console.log(this);
//     }
// };

// let dog = {
//     getGreeting () {
//         return 'wangwang';
//     }
// };

// // 需求：创建一个新的对象，对象中可以使用其原型上的 getGreeting 的方法，并添加 friend 的标识

// let friend = {
//     getGreeting () {
//         return Object.getPrototypeOf(this).getGreeting.call(this) + ' friend';
//     }
// }

// Object.setPrototypeOf(friend, person);
// console.log(friend.getGreeting()) // Hello friend

// // 修改 friend 的原型

// Object.setPrototypeOf(friend, dog);
// console.log(friend.getGreeting()); // wangwang friend

// // 04
// let person = {
//     getGreeting() {
//         return 'Hello';
//     },

//     say: () => {
//         console.log(this);
//     }
// };

// let dog = {
//     getGreeting () {
//         return 'wangwang';
//     }
// };

// // 需求：创建一个新的对象，对象中可以使用其原型上的 getGreeting 的方法，并添加 friend 的标识

// let friend = {
//     getGreeting () {
//         return super.getGreeting() + ' friend';
//     }
// }

// Object.setPrototypeOf(friend, person);
// console.log(friend.getGreeting()) // Hello friend

// // 修改 friend 的原型

// Object.setPrototypeOf(friend, dog);
// console.log(friend.getGreeting()); // wangwang friend


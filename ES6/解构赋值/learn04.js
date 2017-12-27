// // 01

// function example (name) {
//     name = name || '01';
//     console.log(name);
// }

// example(); // 01
// example(0); // 01

// // 02

// function example(name) {
//   name = typeof name !== "undefined" ? name : "01";
//   console.log(name);
// }

// example(); // 01
// example(0); // 0

// // 03

// function example (name = '01')  {
//     console.log(name);
// }

// example(); // 01
// example(0); // 0

// // 04

// function example (first, sec) {

//     // "use strict";
//     console.log(arguments);

//     first = 'change';
//     sec = 'change';

//     console.log(arguments);
// }

// example('one', 'two');

// // { '0': 'one', '1': 'two' }
// // { '0': 'change', '1': 'change' }

// // 05

// function example(name, age = 24) {
//   console.log(arguments);

//   name = "change";
//   age = "change";

//   console.log(arguments);
// }

// example('05');

// // { '0': '05' }
// // { '0': '05' }

// example('05', 5);

// // { '0': '05', '1': 5 }
// // { '0': '05', '1': 5 }

// // 06

// function getValue() {
//     return 24;
// }
// function getAge (age = getValue()) {
//     console.log(age);
// }

// getAge(); // 24
// getAge(12); // 12

// // 07

// function example(first, sec = first) {
//   console.log(first, sec);
// }

// example(1); // 1 1

// function example2(first = sec, sec) {
//   console.log(first, sec);
// }

// example2(1); // 1 undefinded
// example2(undefined, 1); // sec is not defined

// // 08
// function pick(object) {
//     let result = Object.create(null);

//     for (let i = 1, len = arguments.length; i < len; i++ ) {
//         result[arguments[i]] = object[arguments[i]];
//     }
//     return result;
// }

// let person = {
//     name: '小明',
//     age: 24,
//     job: 'student'
// };

// let personInfor = pick(person, 'age', 'job');
// console.log(personInfor); // { age: 24, job: 'student' }

// // 09

// function pick (object, ...attr) {

//     let result = new Object(null);
//     for (let i = 0, len = attr.length; i < len; i++) {
//         result[attr[i]] = object[attr[i]];
//     }
//     return result;
// }

// let person = {
//     name: '小明',
//     age: 24,
//     job: 'student'
// };

// let personInfor = pick(person, 'age', 'job');
// console.log(personInfor); // { age: 24, job: 'student' }
// console.log(pick.length); // 1

// 10

function example(first, ...arr) {
  console.log(arr.length);
  console.log(arguments.length);
}

example(1, 2, 3, 4, 5, 6); // 5 6

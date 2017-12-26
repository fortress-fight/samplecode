// let arr = ['小明', '小花'];

// let [friend1, friend2] = arr;
// console.log(friend1, friend2) // 小明 小花

// let {0:first, length: l} = ['小明', '小花'];
// console.log(first, l); // 小明 2

// 02
// let arr = ['小明', '小花'];
// let friend1, friend2;

// [friend1, friend2] = arr;
// console.log(friend1, friend2) // 小明 小花

// 03
// let arr = ['小明', '小花'];
// let friend1, friend2, friend3, friend4;

// [friend1, friend2] = arr;
// console.log(friend1, friend2, friend3, friend4) // 小明 小花 undefined 小白

// 04
// let arr = ['小明', '小花', ['花', '鸟', '虫子']];
// let friend1, friend2, animal1, animal2;

// [friend1, friend2, [animal1, animal2]] = arr;
// console.log(friend1, friend2, animal1, animal2) // 小明 小花 花 鸟

// 05
// let arr = ['小明', '小花', ['花', '鸟', '虫子']];
// let friend1, other;

// [friend1, ...other] = arr;
// console.log(friend1, other) // 小明 [ '小花', [ '花', '鸟', '虫子' ] ]

// // 06

// function example6 (option) {
//     let initOption = {
//         name: '06',
//         age: 24
//     };
//     option = Object.assign(initOption, option);
//     let name = option.name;
//     console.log(option); //{ name: 'haha', age: 24, job: 'student' }
// }

// example6({name: 'haha', job: 'student'})

// 07

// function example7 ({name=07, age=24, job}) {
//     console.log(name, age, job); // haha 24 student
// }

// example7({name: 'haha', job: 'student'});
// example7(); // Cannot match against 'undefined' or 'null'.

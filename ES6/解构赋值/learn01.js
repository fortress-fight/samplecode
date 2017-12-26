// 01
// let example = {
//   type: "object",
//   index: "01"
// };

// let { type, index } = example;

// console.log(type, index); // object 01

// 02

// let example2 = {
//   type: "object",
//   index: 02
// };

// let type = null,
//   index = 0;

// ({ type, index } = example2);
// console.log(type, index); // object 02

// // {type, index} = example2; // Unexpected token =

// ({ type, index } = null); //TypeError: Cannot match against 'undefined' or 'null'.

// // 03

// let example3 = { name: "object" };
// let {name = "new",age = 24} = example3;
// console.log(name, age) // object 24

// 04

// let example4 = {
//     name: "object",
//     age: "24"
// };

// let {
//     name: newname,
//     age: age,
//     job: localjob = 'student'
// } = example4;

// console.log(newname, age, localjob); // object 24 student

// 05

let example5 = {
    name: 'obj',
    age: '24',
    pos: {
        x: 100,
        y: 100,
        infor: {
            x: `横向`,
            y: `纵向`
        }
    }
};

let {name, pos: {x, infor: {x: inforx}}} = example5;
console.log(name, x, inforx); // bj 100 横向
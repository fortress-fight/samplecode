function CreatePerson (name) {
    this.name = name;
}

CreatePerson.prototype.sayName = function () {
    console.log(this.name);
}

var person1= new CreatePerson('example');

person1.sayName(); // example

// 检测继承关系
console.log(person1 instanceof CreatePerson); // true
console.log(person1 instanceof Object); // true
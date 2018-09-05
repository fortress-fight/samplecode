// ES5 之前类的继承

// 01

function Person(name) {
    this.name = name;
}

Person.prototype = {
    constructor: {
        value: Person,
        enumerable: true,
        writeable: true,
        configurable: true
    },
    sayName: function () {
        console.log(this.name);
    }
}

function Student(name) {
    this.job = 'student';
    Person.call(this, name);
}

Student.prototype = new Person();
Student.prototype.sayJob = function () {
    console.log(this.job);
};

var student = new Student('xiao ming');
student.sayName(); // xiao ming
student.sayJob(); // student

console.log(student instanceof Person); // true
console.log(student instanceof Student); // true

// ES6 的类继承

// 02

class Person1 {
    constructor(name) {
        this.name = name;

    }

    sayName() {
        console.log(this.name);
        return this.name;
    }
}

class Student1 extends Person1 {
    constructor(name) {
        super(name)
        // 相当于 Person1.call(this, name);
    }
    sayJob() {
        console.log('students');
    }
}

let student1 = new Student1('小红');

student1.sayName(); // 小红
student1.sayJob(); // student

console.log(student1 instanceof Person1); // true
console.log(student1 instanceof Student1); // true

// 03

class Student2 extends Person1 {
    sayJob() {
        console.log('学生')
    }
}

let student2 = new Student2('小白');
console.log(student2 instanceof Person1);
true

// 类继承中的方法屏蔽

// 04

class Student3 extends Person1 {
    constructor(name) {
        super(name)
        // 相当于 Person1.call(this, name);
    }
    sayName() {
        console.log('学生' + this.name);
    }
    sayJob() {
        console.log('students');
    }
}

let student3 = new Student3('小红');

student3.sayName(); // 学生小红
student3.sayJob(); // student

// 05

class Student4 extends Person1 {
    constructor(name) {
        super(name)
    }
    sayName() {
        console.log('学生' + super.sayName());
    }
    sayJob() {
        console.log('students');
    }
}

let student4 = new Student4('小红(super)');

student4.sayName();
// 小红(super) -- Person 调用产出的
// 学生小红(super) -- Student4 调用产出的

student4.sayJob(); // student


// 静态属性的继承

// 06

class Person3 {
    constructor(name) {
        this.name = name;
    }

    static sayJob(job, name) {
        console.log(job + ' is ' + new Person3(name).name);
    }
}

class Teacher extends Person3 {
    constructor(name) {
        super(name)
    }
}

Teacher.sayJob('Jack', 'teacher') // Jack is teacher

// 派生自表达式的类

// 07

class Person4 {
    constructor (name) {
        this.name = name;
    }

    sayName () {
        console.log(this.name);
    }
}

function createPerson () {
    return Person4;
}

class ClonePerson  extends createPerson() {
    constructor (name) {
        super('clone' + name)
    }
}

let xiaoming = new ClonePerson('小明');
xiaoming.sayName(); // clone小明

// 08

let sayAgeMixin = {
    sayAge () {
        console.log(this.age)
    }
}

let sayHiMixin = {
    sayHi () {
        console.log(this.talk);
    }
}

function mixin (...mixin) {
    let base = function () {};
    Object.assign(base.prototype, ...mixin);
    return base;
}

class CreatePerson extends mixin(sayAgeMixin, sayHiMixin) {
    constructor (age, talk) {
        super();
        this.age = age;
        this.talk = talk;
    }
}

let person4 = new CreatePerson('24', 'hello');

person4.sayAge(); // 24
person4.sayHi(); // hello
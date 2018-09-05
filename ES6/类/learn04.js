function createObject(classDef) {
    return new classDef();
}

let obj = createObject(class {
    sayHi() {
        console.log('hello');
    }
});

obj.sayHi(); // hello

let example = new class {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }
}('example');

example.sayName(); // example

// ------------

class createPerson {
    constructor() {

        this.infor = {
            name: 'example'
        }

    }
    set name(value) {
        console.log('设置了 name 值');
        this.infor.name = value;
    }

    get name() {
        console.log('正在获取 name 值');
        return this.infor.name;
    }
}

let person = new createPerson();
console.log(person.name);
// 正在获取 name 值

// --------

let createPerson2 = (function () {

    const createPerson2 = function () {

        if (typeof new.target === 'undefined') {
            throw new Error('必须通过关键字进行调用');
        }

        this.infor = {
            name: 'example'
        }

    }
    createPerson2.prototype.sayName = function () {
        console.log(this.name);
    };
    Object.defineProperty(createPerson2.prototype, 'name', {
        enumerable: false,
        configurable: true,
        get: function () {
            return this.infor.name;
        },
        set: function (name) {
            this.infor.name = name;
        }
    });
    return createPerson2;
})();

let example3 = new createPerson2();

console.log(example3.infor);
// { name: 'example' }

example3.infor.name = 'ff';

console.log(example3.infor);
// { name: 'ff' }

// ------- static

function createPerson3(name) {
    this.name = name;
}

createPerson3.create = (name) => {
    return new createPerson3(name);
}

createPerson3.prototype.sayName = function () {
    console.log(this.name);
}

let person3 = createPerson3.create('ceshi');
person3.sayName(); // ceshi

class CreatePerson {
    constructor(name) {
        this.name = name;
    }

    sayName () {
        console.log(this.name);
    }
    
    static create(name) {
        return new CreatePerson(name);
    }
}

CreatePerson.create('ceshi2').sayName(); // ceshi
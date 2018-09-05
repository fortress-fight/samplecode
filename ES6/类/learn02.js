class CreatePerson {
    constructor (name) {
        this.name = name;
    }

    sayName () {
        console.log(this.name);
    }
}

let person = new CreatePerson('example');
person.sayName(); // example

console.log(person instanceof CreatePerson); // true
console.log(person instanceof Object); // true

console.log(typeof CreatePerson); // function
console.log(typeof CreatePerson.prototype.sayName); // function

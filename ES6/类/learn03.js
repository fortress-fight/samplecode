let CreatePerson = (function () {

    "use strict";
    
    const CreatePerson = function (name) {

        if (typeof new.target === 'undefined') {
            throw new Error ('必须通过关键字 new 调用构造函数');
        }

        this.name = name;
    }

    Object.defineProperty(CreatePerson.prototype, 'sayName', {
        value: function () {

            if (typeof new.target !== 'undefined') {
                throw new Error('不可使用关键字 new 调用该方法');
            }

            console.log(this.name);
            
        },
        enumerable: false,
        writable: true,
        configurable: true
    });

    return CreatePerson;
})();

let person = new CreatePerson('example');

person.sayName(); // example
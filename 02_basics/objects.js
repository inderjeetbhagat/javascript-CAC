// singleton
/* objects can be created in two ways
- using literals
- using constructor (new keyword) */

//literals
var person = {
    name : 'inder',
    age : 23,
    sayHello : function() {
        console.log("hi");
    }
};

//constructor

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log("hello!");
    };
}

let person = new Person("Inder",30);
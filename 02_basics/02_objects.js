// singleton
/* objects can be created in 3 ways
- using literals
- using constructor (new keyword) 
- Object.create*/

//literals
var person = {
    name : 'inder',
    age : 23,
    sayHello : function() {
        console.log("hi");
    }
};
console.log(person["name"]);
//constructor

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log("hello!");
    };
}

let person = new Person("Inder",30);

//objec.create
var personPrototype = {
    sayHello: function() {
      console.log('Hello!');
    }
  };
  
  var person = Object.create(personPrototype);
  person.name = 'John';
  person.age = 30;
// literal = No singleton
// Constructuin = Singleton

const mySym = Symbol("key1");

const user = {
    [mySym]: "sym"
}

console.log(user[mySym]);

Object.freeze(user);
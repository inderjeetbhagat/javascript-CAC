// const tinderUser = new Object() -> Singleton Object
const tinderUser = {} //non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "inder@gmial.com",
    fullname: {
        userfullname: {
            firstname: "inderjeet",
            lastname: "Bhagat"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "d"}

// const obj3 = Object.assign(obj1, obj2)
const obj3 = Object.assign({}, obj1, obj2)


console.log(obj3)
console.log(obj1)//obj1 becomes equal to obj2 when used line 24 as first parameter is for target
const obj4 = {...obj1, ...obj2};

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("name"));


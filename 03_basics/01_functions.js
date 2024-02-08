function sayMyName() {
    let name = "Inder"
    for (let i = 0; i< name.length; i++) {
        console.log(...name);
        console.log(name);
    }
}
sayMyName();

//rest operator

function calculateCartPrice(...num){
    return num; 
}

console.log(calculateCartPrice(200, 333,499));//[ 200, 333, 499 ]

const user = {
    username: "inder",
    price: 199
}

function handleObject(obj){
    console.log(`Username is ${obj.username} and price is ${obj.price}`)
}
handleObject(user)

const myNewArray = [200, 400, 1000];

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
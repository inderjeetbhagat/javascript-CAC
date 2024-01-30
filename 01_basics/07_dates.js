let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toTimeString())

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString())

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000)); // converts mili seconds into seconds
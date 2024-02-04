//arrays

const myArr = [0, 1, 2, 3, 4]

// Object Properties of array
let myArray = ['apple', 'banana', 'orange'];

// Adding properties to the array object
myArray.color = 'red';
myArray.shape = 'round';

// Accessing object properties
console.log(myArray.color); // Output: 'red'
console.log(myArray.shape); // Output: 'round'

// Array elements remain unaffected
console.log(myArray); // Output: ['apple', 'banana', 'orange']

//color and shape are not considered array elements but are object properties associated with the array object. 

let arr = [1, 2, 3, 4];
console.log(arr)
arr.push(19)
console.log(arr)
arr.unshift(77)
console.log(arr)

// slice, splice 

// slice does not manipulate the original array but splice does
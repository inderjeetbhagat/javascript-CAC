let score = "33"
let score1 = "aa"

console.log(typeof score);
let valueInNumber = Number(score);
let valueInNumber1 = Number(score1);
console.log(typeof valueInNumber);
console.log(typeof valueInNumber1);
console.log(valueInNumber);
console.log(valueInNumber1);//NaN

//"33" => 33
//"33abe" => NaN

console.log("1" + 2 + 2); //122
console.log(2 + 2 + "1"); // 41

// == and equality check is different(<,>,>=)
// === strict check

//////////////////////////
// Stack (primitive) -> You get a copy , Heap (Non Primitive) -> you get a reference of the original value

let nonPrimitive1 = {
    name : "inder",
    id : 7
}
    
let nonPrimitive2 = nonPrimitive1
nonPrimitive2.name = "Dhoni"
console.log(nonPrimitive1);

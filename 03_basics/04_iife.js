// immediately Invoked Function Expressions

(function chai(){
    console.log(`DB Connected`);
})();
function chaii(){
    console.log(`DB Connected`);
}
console.log(this)

/**An IIFE (Immediately Invoked Function Expression) in JavaScript is a function that is defined and immediately executed. It helps create a separate scope for variables and functions, preventing them from polluting the global scope. IIFEs are commonly used to encapsulate code, maintain data privacy, and execute code immediately without the need for explicit function calls. */
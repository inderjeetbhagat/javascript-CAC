const accountId = 123
let accountEmail = "inder@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

let accountState;

// accountId = 2 - - Not allowed
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountState])
/*
Never use var - because of issue in block scope scope and functional scope
*/
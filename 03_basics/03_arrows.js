const user = {
    username: "htesh",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
    }
}

user.welcomeMessage()
user.username = "Inder"
user.welcomeMessage()


const chai = () => {
    console.log("hey")
}
chai()

// const add = (num1, num2) => num1 + num2 //implicit return
// const add = (num1, num2) => (num1 + num2) 
// const add = (num1, num2) => {return num1 + num2} //explicit return

const addTwo = () => ({username: "inder"})//you have to wrap object into paranthesis to return
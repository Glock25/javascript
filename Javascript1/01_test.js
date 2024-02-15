// We Can't update the value of const
const accountId = 1455;

// we can update the value of let
let accountEmail = "noshad@gmail.com"

// we can update the value of var. Not use var because of issue in block scope and funtional scope
var accountPassword = "12345"

// We can also decalre var direct with name but this method is not good
accountCity = "Jaipur"

// when we declare variable name only not assign a value in it than i will be undefined
let accountState;

// accountId = 2 not allowed

accountEmail = "khan@gmail.com"
accountPassword = "54321"
accountCity = "Ajmer"

console.log(accountEmail);

console.log([accountEmail, accountPassword, accountCity,accountState]);




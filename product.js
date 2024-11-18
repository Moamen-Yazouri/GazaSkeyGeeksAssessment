// Task 4: Create a TypeScript interface for a Product with the following properties: name: string, price: number
;
// the function that calculate the total price
function calcTotalPrice(products) {
    return products.reduce(function (total, product) { return total + product.price; }, 0);
}
;
// Testing
var products = [
    { name: "Pr1", price: 10 },
    { name: "Pr2", price: 20 },
    { name: "Pr3", price: 30 }
];
console.log("The total price is: $".concat(calcTotalPrice(products)));
// ----------------------------------------------------------------
/* Task 5:
Write a TypeScript function that accepts a string and checks if it is a valid email address.
You can assume the email should have a basic structure like username@domain.com.
Use regular expressions to implement this.*/
// Function that validate the email
function emailValidation(email) {
    var regExp = /^\w+@\w+.[a-zA-z]{2,}$/;
    return regExp.test(email);
}
// Testing
console.log(emailValidation("m@gmail.ps")); //valied
console.log(emailValidation("mmm*gmail/com")); //invalied
// Instructions for compile
/*
1- be sure that you installed nodejs on the system;
2- download tsc package;
 */

// Task 1;

const a = 5;
const b = 10;

console.log("Addition: 5 + 10 =", 5 + 10)
console.log("Subtraction: 5 - 10 =", 5 - 10)
console.log("Multiplication: 5 * 10 =", 5 * 10)
console.log("Division: 5 / 10 =", 5 / 10)

//Task 2;

// true && true                               result: true
// false || true                              result: true
// true && 'false'                            result: 'false'
// 0 && 1 || ' ' && 42                        result: 42
// null == undefined                          result: true
// '' == 0                                    result: true
// 1 === '1'                                  result: false
// NaN === NaN && true                        result: false
// true || false && true || false             result: true
// (true || false) && (true || false)         result: true
// 10 || 0 && 'dog' || ''                     result: 10
// (10 || 0) && ('dog' || '')                 result: 'dog'

// Task 3;

alert("Task 3")

let num1 = Number(prompt("Enter the first number"))
let num2 = Number(prompt("Enter the second number"))

if (num1 > num2){
    alert("The number "+ num1 + " is greater than the number " + num2)
}else if (num1 === num2){
    alert("The number " + num1 + " is equal to the number " + num2)
}else{
    alert("The number " + num1 + " is less than the number " + num2)
}

// Task 4;

alert("Task 4")

let number1 = Number(prompt("Enter the first number"))
let number2 = Number(prompt("Enter the second number"))
let operation = prompt("Enter the mathematical operation (+, -, *, /)")

switch (operation) {
    case "+":
        alert("Answer: " + (number1 + number2))
    break;

    case "-":
        alert("Answer: " + (number1 - number2))
    break;

    case "*":
        alert("Answer: " + (number1 * number2))
    break;

    case "/":
        alert("Answer: " + (number1 / number2))
    break;

    default:
        alert("This mathematical operation is not available");
}

// Task 5;

alert("Task 5")

let userAge = Number(prompt("Enter your age"))

if (userAge < 12 || userAge > 80){
    alert("Entry is not allowed")
}else if(userAge >= 18 && userAge < 60){
    alert("Entry is allowed")
}else if((userAge >=12 && userAge < 18) || (userAge >= 60 && userAge <= 80)){
    let isPermittedByAdults = prompt("Do you have adults' permission (Yes, No)")
    if (isPermittedByAdults == "Yes"){
        alert("Entry is allowed")
    }else if (isPermittedByAdults == "No"){
        alert("Entry is not allowed")
    }else {
        alert("Enter 'Yes' or 'No' please")
    }
}else {
    alert("Enter the number please")
}
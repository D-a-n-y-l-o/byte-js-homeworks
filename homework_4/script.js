// Task 1;

function isEqual (num1, num2) {
    if (num1 === num2){
        return true
    }else {
        return false
    }
}

console.log(isEqual(3, 2))

// Task 2;

function calcSum(num1, num2) {
    result = num1 + num2;
    return result;
}

const sum = (num1, num2) => num1 + num2

console.log(calcSum(22, 33))
console.log(calcSum(1876, 674))

console.log(sum(3, 8))
console.log(sum(10, 24))

// Task 3;

function exponentiation (base, exponent = 2) {
    return base ** exponent;
}

console.log(exponentiation(2))
console.log(exponentiation(2, 6))

// Task 4;

function getTheDayOfTheWeekByNumber(num){
    switch (num){
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
        case 7:
            return "Sunday"
        default:
            return "There is no day of week like that"
    }
}

console.log(getTheDayOfTheWeekByNumber(5))
console.log(getTheDayOfTheWeekByNumber(7))

// Task 5;

function userGreeting(){
    let name = prompt("Enter your name")
    let age = Number(prompt("Enter your age"))

    if (age > 30) {
        alert("Hello, " + name)
    }else if (age > 0 && age <= 30){
        alert("Hi, " + name)
    }else {
        alert("There is no age like that")
    }
}

userGreeting();
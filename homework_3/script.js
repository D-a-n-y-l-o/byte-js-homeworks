// Task 1;

const a = 5;
const b = 10;

console.log("Сума: 5 + 10 =", 5 + 10)
console.log("Різниця: 5 - 10 =", 5 - 10)
console.log("Множення: 5 * 10 =", 5 * 10)
console.log("Ділення: 5 / 10 =", 5 / 10)

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

let num1 = prompt("Введіть перше число")
let num2 = prompt("Введіть друге число")

if (num1 > num2){
    alert("Число "+ num1 + " більше числа " + num2)
}else if (num1 === num2){
    alert("Число " + num1 + " дорівнює числу " + num2)
}else{
    alert("Число " + num1 + " менше числа " + num2)
}

// Task 4;

let number1 = prompt("Введіть перше число")
let number2 = prompt("Введіть друге число")
let operation = prompt("Введіть бажану математичну дію (+, -, *, /)")

switch (operation) {
    case "+":
        alert("Відповідь: " + (Number(num1) + Number(num2)))
    break;

    case "-":
        alert("Відповідь: " + (num1 - num2))
    break;

    case "*":
        alert("Відповідь: " + (num1 * num2))
    break;

    case "/":
        alert("Відповідь: " + (num1 / num2))
    break;

    default:
        alert("Дана математична дія недоступна");
}

// Task 5;

let userAge = prompt("Введіть свій вік")

if (userAge < 12 || userAge > 80){
    alert("Вхід заборонено")
}else if(userAge >= 18 && userAge < 60){
    alert("Вхід дозволено")
}else{
    let isPermittedByAdults = prompt("Чи отримали ви дозвіл дорослих? (Так, Ні)")
    if (isPermittedByAdults == "Так"){
        alert("Вхід дозволено")
    }else{
        alert("Вхід заборонено")
    }
}
// Practice (Lesson):
// Task 1;

// alert('Classwork Task 1 (Homework Task 3)');

// const LOGIN = 'ADMIN';
// const PASSWORD = '1q2w3e';

// function authorize () {
//     let userLogin;
//     let userPassword;

//     for(let x = 0; x < 3; x++) {
//         userLogin = prompt('Enter login ');
//         if (!userLogin){
//             alert('Enter login');
//             alert(`You have ${2 - x} attempt(s) left`);
//             continue;
//         }

//         userPassword = prompt('Enter password ')
//         if(!userPassword){
//             alert('Enter password');
//             alert(`You have ${2 - x} attempt(s) left`);
//             continue;
//         } 
        
        
//         if(userLogin === LOGIN && userPassword === PASSWORD){
//             alert('Welcome')
//             break;
//         } else {
//             alert('The entered data is incorrect');
//             alert(`You have ${2 - x} attempt(s) left`);
//             continue;
//         }
//     }
// }

// authorize ()

// // Task 2;

// alert('Classwork Task 2');

// function buildPyramid (height) {
//     for(let y = 0; y < height; y++){
//         let spacesBefore = '';
//         let stars = '';

//         for(h = 0; h < 2 * y + 1; h++){
//             stars += '*';
//         }

//         for(g = 0; g < height - y - 1; g++){
//             spacesBefore += ' ';
//         }

//         console.log(spacesBefore + stars);
//     }
// }

// let desiredHeight = Number(prompt('Enter the height'))

// buildPyramid (desiredHeight)

// alert('Pyramid is built')


//Homework:
// Task 1;

alert('Homework Task 1')

console.log('loop "for"')

for (let i = 0; i < 10; i++){
    let number = i + 1
    console.log(number)
}

console.log('loop "while"')

let i = 0;
while (i < 10){
    let number = i + 1
    console.log(number)
    i++
}

console.log('loop "do while"')

let j = 1;
do {
    console.log(j)
    j++
} while (j <= 10);



console.log('from 20 to 10');

console.log('loop "for"')

for (let k = 0; k <= 10; k++){
    let number = 20 - k
    console.log(number)
}

console.log('loop "while"')

let k = 0;
while (k <= 10){
    let number = 20 - k
    console.log(number)
    k++
}

console.log('loop "do while"')

let m = 20;
do {
    console.log(m)
    m--
} while (m >= 10);

// // Task 2;

// alert('Homework Task 1 is done')

// function getPrimeNumbers (start, end) {
//     primeNumbers:
//     for (let n = start; n <= end; n++) {
//         let isNotPrime = false

//         if (n == 0 || n == 1){
//             continue;
//         } else if(n > 1){
            
//             for(l = 2; l < n; l++){
//                 if(n % l == 0){
//                     isNotPrime = true;
//                     break; 
//                 }

//             }

//             if(isNotPrime == false){
//                 primeNumbers = primeNumbers + String(n) + ' ';
//             }
//         }
//     }

//     return primeNumbers
// }

// let result = getPrimeNumbers(prompt('Enter the first number'), prompt('Enter the last number'))

// alert(`Your prime Number(s) are: ${result}`)



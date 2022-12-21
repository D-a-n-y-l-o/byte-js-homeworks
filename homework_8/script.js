// Homework Task1;

const countTrue = (arr) => {
    let result = 0;

    for (let item of arr){
        if (item === true){
            result += 1;
        };

    }

    return result;
}

let array = [true, false, true, true, true, true, false];

console.log('Task 1');

console.log('');

console.log('Number of True is', countTrue(array));

console.log('');

// Task 2;

function getItemOccurrences(arr) {
    let result = {};

    for (item of arr){
        if (!result[item]){
            result[item] = 1;
        } else {
            result[item] += 1;
        }
    }

    return result;

}

console.log('Task 2');

console.log('');

console.log(getItemOccurrences(['r', 'r', 'r', 'a', 'b']));

console.log('');

// Task3;

function getExtraNumber (arr){
    let evenArray = [];
    let oddArray = [];

    for (number of arr){
        
        number % 2 != 0 ? oddArray.push(number) : evenArray.push(number)
    
    };

    if(oddArray.length > evenArray.length){
        return evenArray[0];
    } else {
        return oddArray[0];
    };
};


console.log('Task 3');

console.log('');

console.log('Answer:',getExtraNumber([0, 1, 2]));








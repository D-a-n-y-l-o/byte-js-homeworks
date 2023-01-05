// Task 1;

// Task 1.1:

const digits = [1, 2, -10, -2, 7];

const digitsToBoolean = digits.map((digit) => digit > 0);

console.log(digitsToBoolean);

// Task 1.2;

const users = [
    {
      name: 'Sam',
      role: 'admin',
      age: 25,
    },
      {
      name: 'Peter',
      role: 'admin',
      age: 16,
    },
      {
      name: 'Pablo',
      role: 'admin',
      age: 32,
    },
      {
      name: 'Enrico',
      role: 'client',
      age: 43,
    },
      {
      name: 'Mary',
      role: 'client',
      age: 34,
    },
      {
      name: 'Katerine',
      role: 'guest',
      age: 17,
    },
];

const adultAdmins = users
    .filter((person) => person.role == 'admin' && person.age >= 18)
    .map((person) => person.name)

console.log(adultAdmins);

// Task 1.3:

const numbers = [1, 10, 17, 24, 45];

const averageOfNumbers = numbers.reduce((acc, value, index, arr) => {
    acc += value;
    
    if (index == arr.length - 1){
        return acc / arr.length;
    } else{
        return acc;
    };
}, 0);

console.log(averageOfNumbers);

// Task 2:

const isNegative = (number) => number < 0;
const increment = (number) => number + 1;
const logger = (element, index, array) => {
  console.log(`In array [${array}] on position ${index}: ${element}`);
};

function ownForEach(arr, logger){
    for (let i = 0; i < arr.length; i++){
        logger(arr[i], i, arr);
    };
};

console.log(ownForEach([1, 2, 3], logger));

function ownMap(arr, increment){
    arrClone = [];
    for (let i = 0; i < arr.length; i++){
        arrClone.push(increment(arr[i]));
    };

    return arrClone;
};

console.log(ownMap([1, 2, 3], increment));

function ownFilter(arr, isNegative) {
    arrClone = [];
    for (num of arr){
        if (!isNegative(num)){
            continue;
        }

        arrClone.push(num);
    };

    return arrClone;
};

console.log(ownFilter([-2, 4, -1], isNegative));

// Task 3:

const getKeys = (obj) => {
    let keys = [];
    for (key in obj){
        keys.push(key);
    };

    return keys;
};

const filterData = (arr, condition) => {
    let result = data.filter(item => {
        return getKeys(condition).every(key => {
            return item[key] == condition[key];
        });
    });
    
    return result;
}

const data = [
    {
      name: "John",
      age: 24,
      position: "senior",
      isActive: false,
    },
    {
      name: "Peter",
      age: 33,
      position: "middle",
      isActive: false,
    },
    {
      name: "Sam",
      age: 29,
      position: "junior",
      isActive: true,
    },
    {
      name: "Mary",
      age: 24,
      position: "middle",
      isActive: false,
    },
    {
      name: "Steve",
      age: 23,
      position: "middle",
      isActive: true,
    },
    {
      name: "Kate",
      age: 31,
      position: "middle",
      isActive: false,
    },
    {
      name: "Sally",
      age: 19,
      position: "junior",
      isActive: false,
    },
    {
      name: "Jack",
      age: 19,
      position: "middle",
      isActive: true,
    },
];

console.log(filterData(data, { age: 24, position: 'middle' }));

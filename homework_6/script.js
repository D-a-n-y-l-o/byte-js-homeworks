// Task 1;

alert('Task 1')

function validateNames (name) {
    if (name != ''){
        return name;
    } else {
        return false;
    }
}

function validatePassword (password) {
    if (password.length < 7){
        return false;
    };

    let uppercaseCounter = 0;
    let lowercaseCounter = 0;

    let character = '';

    for (let i = 0; i <= password.length; i++){
        character = password.charAt(i);
        if (character == character.toUpperCase()){
            uppercaseCounter += 1;
        } else if (character == character.toLowerCase()){
            lowercaseCounter += 1;
        };
    }

    if (uppercaseCounter >= 1 && lowercaseCounter >= 1){
        return password;
    } else {
        return false;
    }
}

function formatNames (name){
    let namesFirstLetter = name.slice (0, 1);
    let namesOtherLetters = name.slice (1, name.length);

    namesFirstLetter = namesFirstLetter.toUpperCase();
    namesOtherLetters = namesOtherLetters.toLowerCase();

    result = namesFirstLetter + namesOtherLetters;

    return result;
}

function authorize () {
    let fullName = '';
    
    do {
        let name = prompt('Enter your Name');
        if (validateNames(name) == false){
            alert('Enter valid Name');
            continue;
        } else {
            name = formatNames(name);
        };

        let lastName = prompt('Enter your Last Name');
        if (validateNames(lastName) == false){
            alert('Enter valid Last Name');
            continue;
        } else {
            lastName = formatNames(lastName);
        };

        let password = prompt('Enter your Password');
        if (validatePassword(password) == false){
            alert('Enter valid Password');
            continue;
        };

        fullName = `${name} ${lastName}`;

        return alert(`Welcome! ${fullName}`)

    } while (true);
}

authorize ();

// Task 2;

alert('Task 2')

function getRandomInt () {
    let min = Math.round(prompt('Enter the minimum value'));
    let max = Math.round(prompt('Enter the maximum value'));
    
    let result = Math.floor(Math.random() * (max - min + 1) + min);
    return alert(`Your result ${result}`);
}

getRandomInt ();
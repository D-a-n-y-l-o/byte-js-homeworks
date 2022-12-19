// Task 1;

function sliceDate (date) {
    let hours = date.slice(0, 2);
    let minutes = date.slice(3, 5);

    return {
        hours,
        minutes,
    };
}


function createTimetable () {
    let today = new Date();
    let timetableTime;

    let createdTimetable = {};
    
    do{
        let newTimeForTask = prompt('Enter desired time for task (format is HH:MM)');
        if (newTimeForTask == null){
            break;
        };

        let savedTimeForTask = sliceDate(newTimeForTask);
        if (savedTimeForTask.hours == '' || savedTimeForTask.minutes == ''){
            break; 
        };
        
        let nameOfTask = prompt ('Describe the task');
        if (nameOfTask == ''){
            break;
        };

        let enteredTime = new Date(new Date(today).setHours(savedTimeForTask.hours, savedTimeForTask.minutes));

        timetableTime = `"${String(enteredTime.getHours())}:${String(enteredTime.getMinutes())}"`;

        createdTimetable[timetableTime] = nameOfTask;

    } while (true);
    
    console.log(createdTimetable);
}

createTimetable ();

// Task 2;

function getSalariesSum (salaries) {
    let salariesSum = 0;
    for (employee in salaries) {
        let employeeSalary = Number(salaries[employee] * 100);
        salariesSum += employeeSalary;
    };

    salariesSum = salariesSum / 100;

    return salariesSum;
}

salaries = {
    John: "4300.00",
    Ann: "5700.40",
    Pete: "4900.95",
};

console.log(getSalariesSum (salaries))
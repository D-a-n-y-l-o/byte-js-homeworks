const actionButton = document.querySelector("button");
actionButton.addEventListener("click", library);

const books = [
  { id: 1, author: "George Orwell", name: "1984", isReading: false },
  { id: 2, author: "Frank Herbert", name: "Dune", isReading: false },
  { id: 3, author: "Daniel Defoe", name: "Robinson Crusoe", isReading: false },
  { id: 4, author: "Walter Scott", name: "Ivanhoe", isReading: false },
  { id: 5, author: "Francis Scott Key Fitzgerald", name: "The Great Gatsby", isReading: false },
];

function getTheNamesOfBooks(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let bookName = array[i].name;
        result.push(bookName);
    };

    return result;
};

// console.log(getTheNamesOfBooks(books))

function takeTheBook() {
    let availableBooks = books.filter((book) => book.isReading == false);

    let namesOfAvailableBooks = getTheNamesOfBooks(availableBooks);
    namesInColumn = namesOfAvailableBooks.join('\n');

    let desiredBookName = prompt(`Enter the book name: \n${namesInColumn}`);

    if(!desiredBookName){
        alert('Please enter the name of the book');
        return;
    };

    let existenceInBooks = books.some((book) => book.name == desiredBookName);
    let existenceInAvailableBooks = availableBooks.some((book) => book.name == desiredBookName);

    if (existenceInBooks == true && existenceInAvailableBooks == true){
        let takenBook = books.find((book) => book.name == desiredBookName);
        takenBook.isReading = true;
        alert(`Thanks! Your book id is ${takenBook.id}`);
    } else if (existenceInBooks == true && existenceInAvailableBooks == false) {
        alert('Unfortunately, now this book is being read by another customer');
    } else {
        alert('Unfortunately, we don`t have this book in our library');
    };

    return;
};

function returnTheBook(){
    let idOfBookToReturn = prompt('Please enter the id of the book that you would like to return');

    if(!idOfBookToReturn){
        alert('Please enter the book id');
        return;
    };

    let existenceInBooks = books.some((book) => book.id == idOfBookToReturn);
    let bookToReturn = books.find((book) => book.id == idOfBookToReturn);

    if(existenceInBooks == false){
        alert('Unfortunately, we don`t have that book in our library');
    } else if(bookToReturn.isReading == true){
        bookToReturn.isReading = false;
        alert(`Thank you! The book "${bookToReturn.name}" is successfully returned`);
    } else {
        alert(`Sorry, but the book "${bookToReturn.name}" haven't been taken`);
    };

    return;
};

function addTheBook(){
    let nameOfTheBook = prompt('Please enter the book name');
    let authorOfTheBook = prompt('Please enter author name and last name');
    
    let amountOfTheBooks = books.reduce((acc) => {
        acc++;
        return acc;
    }, 0);

    let idOfTheBook = 1 + amountOfTheBooks;

    if(!nameOfTheBook && !authorOfTheBook){
        alert('Both Name of the book and author name are not entered');
        addTheBook();
    } else if(!nameOfTheBook) {
        alert('Name of the book is not entered');
        addTheBook();
    } else if(!authorOfTheBook) {
        alert('Author name is not entered');
        addTheBook();
    } else{
        let newBook = {
            id: idOfTheBook,
            author: authorOfTheBook,
            name: nameOfTheBook,
            isReading: false
        };

        books.push(newBook);
        alert(`The book "${newBook.name}" is successfully added`)
    };

    return;
};

function library() {
    let action = prompt('Choose an action: take, return or add');
    action = action.toLowerCase().trim();

    if(action === null){
        alert('Bye!');

        return;
    }

    switch (action){
        case 'take':
            takeTheBook();
            break;
        case 'return':
            returnTheBook();
            break;
        case 'add':
            addTheBook();
            break;
        default:
            alert('This action is impossible, please choose out of possible actions.');
    };
    return;
};
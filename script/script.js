const library = [];
let inputData = prompt('Enter book data separate by ";" with four fildes like "isbn;title;author;year"');

while (inputData) {
    let arg = inputData.split(';');
    if (arg.length === 4) {
        let check = findBook(library, arg[0]);
        check === -1 ? library.push(new Book(arg[0], arg[1], arg[2], arg[3])) : alert(`The position of ISBN of your book in library is ${check}`);
        inputData = prompt('Enter book data separate by ";" with four fildes like "isbn;title;author;year"');
    }
    else {
        alert('ERROR: DATA is filled incorrectly');
        inputData = prompt('Enter book data separate by ";" with four fildes like "isbn;title;author;year"');
    } 
}

printLibrary(library);

function findBook(library, isbn) {
    for (let i = 0; i < library.length; i++) {
        if (library[i].isbn === isbn) {
            return i;
        }
    }
    return -1;
}

function printLibrary(library) {
    for (let i = 0; i < library.length; i++) {
        let p = document.createElement('p');
        let book = document.createTextNode(`Book number ${i+1} : ${library[i].toString()}`);
        p.appendChild(book);
        newbook.appendChild(p, newbook.firstElementChild);
    }

}

function Book(isbn, title, author, year) {
    this.isbn = isbn;
    this.title = title;
    this.author = author;
    this.year = +year;
    this.toString = function () {
        return `ISBN : ${this.isbn}, Title : ${this.title}, Author : ${this.author}, Year of publishing : ${this.year}`;
    }
}
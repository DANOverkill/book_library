const buttonTest = document.querySelector('#test');

buttonTest.addEventListener('click', function(){
    test();
});

let test = function () {
    console.log('js file linked to html');
    alert('js is connected to the html');
}; 

// end of test

const myLibrary = [];


function Book(name, genre, author, pages, read) {
    this.name = name;
    this.genre = genre;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.haveRead = function() {
        console.log(`I have ${this.read} ${this.name}`);
    };
};

function addBookToLibrary(name, genre, author, pages, read) {
    for (let book of myLibrary) {
        if (book.name.toLowerCase() === name.toLowerCase()) {
            return "This book already exists in your library";
        };
    }
    let newBook = new Book (name, genre, author, pages, read);
    myLibrary.push(newBook);
    return newBook;
    };

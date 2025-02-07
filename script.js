const buttonTest = document.querySelector('#test');
const modal = document.getElementById('bookForModal'); 



buttonTest.addEventListener('click', function(){
    openAddBook();
});

let openAddBook = function () {
    console.log('button test');
    modal.style.display = 'block';
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

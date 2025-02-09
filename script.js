// DOM cash ----------------------------
const addBookBtn = document.querySelector('#addBookBtn');
const modal = document.querySelector('.modal'); 
const close = document.querySelector('.close');

// event listeners----------------------
addBookBtn.addEventListener('click', function(){
    openAddBook();
});

close.addEventListener('click', function(){
    modal.style.display = 'none';
})

// Logic -------------------------------
let openAddBook = function () {
    console.log('button test');
    modal.style.display = 'block';
}; 



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

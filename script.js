// DOM cash ----------------------------
const addBookBtn = document.querySelector('#addBookBtn');
const modal = document.querySelector('.modal'); 
const close = document.querySelector('.close');
const formEvent = document.querySelector('#bookForm');
const libraryContainer = document.querySelector('.libraryDisplay');
const deleteBookBtn = document.querySelector('.delete-btn');
const formReset = document.getElementById('bookForm');


// event listeners----------------------
addBookBtn.addEventListener('click', function(){
    openAddBook();
});

close.addEventListener('click', function(){
    modal.style.display = 'none';
});

formEvent.addEventListener('submit', function(event){
    event.preventDefault();

    const name = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const genre = document.getElementById('genre').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
    addBookToLibrary(name, genre, author, pages, read);
    modal.style.display = 'none';
    formReset.reset();
});

libraryContainer.addEventListener('click', function(event){
    let readStatusDisplay = event.target.closest('.toggle-read-btn');
    let bookCard = event.target.closest('.bookCard');
    if (event.target == readStatusDisplay) {
        readingStatus(event);
        return;
    }
    deleteFromArray(event);
});


// Logic -------------------------------
const myLibrary = [];

let openAddBook = function () {
    modal.style.display = 'block';
}; 

function Book(name, genre, author, pages, read) {
    this.name = name;
    this.genre = genre;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.haveRead = function() {
            if (this.read === true) {
                return `I have read ${this.name}`;
            } else {
                return  `I have not read ${this.name}`
            }
    };
};

function addBookToLibrary(name, genre, author, pages, read) {
    for (let book of myLibrary) {
        if (book.name.toLowerCase() === name.toLowerCase()) {
           return alert ("This book already exists in your library");
        };
    }
    let newBook = new Book (name, genre, author, pages, read);
    myLibrary.push(newBook);
    writeLibrary();
};



let writeLibrary = function () {
    libraryContainer.innerHTML = ""; // Clear existing content
    myLibrary.forEach(createBookCard);
};

let createBookCard = function(book) {
    let bookCard = document.createElement('div');
    bookCard.id = `${book.name}`
    bookCard.className = 'bookCard'; 

    bookCard.innerHTML = `
    <h3 class="bookName">${book.name}</h3>
    <p>Author: ${book.author}</p>
    <p>Genre: ${book.genre}</p>
    <p>Pages: ${book.pages}</p>
    <p>Status: ${book.read ? "Read" : "Unread"}</p>
    <button class="delete-btn">Delete</button>
    <button class="toggle-read-btn">Toggle Read</button>
  `;

  libraryContainer.appendChild(bookCard);
};

let deleteFromArray = function(event) {
    console.log(event);
    let bookCard = event.target.closest('.bookCard');
    let bookIndex = myLibrary.findIndex((book) => book.name === bookCard.id);
    myLibrary.splice(bookIndex, 1);
    bookCard.remove();
    console.log("iv'e been used");
};

let readingStatus = function (event) {
    console.log(event);
    let readStatusDisplay = event.target.closest('.toggle-read-btn');
    console.log(readStatusDisplay.className);
}


// this checkForBooks function is being used only for troubleshooting and is not 
// part of the functioning logic of the page 
let checkForBooks = function () {
    if (libraryContainer.innerHTML.trim().length === 0) {
        console.log('no books')
    }
    console.log(libraryContainer.innerHTML);
}

// test books that are just for use during development so 
// I don't need to constantly create books 
addBookToLibrary ('Silmarillion', 'fantasy', 'JRR Tolkien', '1586', true);
addBookToLibrary ('the hobbit', 'fantasy', 'JRR Tolkien', '1586', true);
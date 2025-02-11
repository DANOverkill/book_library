// DOM cash ----------------------------
const addBookBtn = document.querySelector('#addBookBtn');
const modal = document.querySelector('.modal'); 
const close = document.querySelector('.close');
const formEvent = document.querySelector('#bookForm');
const libraryContainer = document.querySelector('.libraryDisplay');
const deleteBookBtn = document.querySelector('.delete-btn');

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
    console.log(name);
    console.log(author);
    console.log(genre);
    console.log(pages);
    console.log(read);
    addBookToLibrary(name, genre, author, pages, read);
    modal.style.display = 'none';

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

let createBookCard = function() {
    let bookCard = document.createElement('div');
    bookCard.id = `bookCard-${Book.name}`
    bookCard.className = 'bookCard'; 

    bookCard.innerHTML = `
    <h3>${Book.name}</h3>
    <p>Author: ${Book.author}</p>
    <p>Genre: ${Book.genre}</p>
    <p>Pages: ${Book.pages}</p>
    <p>Status: ${Book.read ? "Read" : "Unread"}</p>
    <button class="delete-btn">Delete</button>
    <button class="toggle-read-btn">Toggle Read</button>
  `;

  libraryContainer.appendChild(bookCard);
};

let deleteBook = function() {
  
}
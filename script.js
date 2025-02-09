// DOM cash ----------------------------
const addBookBtn = document.querySelector('#addBookBtn');
const modal = document.querySelector('.modal'); 
const close = document.querySelector('.close');
const formEvent = document.querySelector('#bookForm');

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
    modal.style.display = 'none';

});


// Logic -------------------------------
let openAddBook = function () {
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

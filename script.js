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
    let newBook = new Book(name, genre, author, pages, read);
    //before adding we need to check if name is already added
    //if yes, return "This book already exists in your library"
    //if not, then add book
    return myLibrary.push(newBook);
};
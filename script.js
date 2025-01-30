const buttonTest = document.querySelector('#test');

buttonTest.addEventListener('click', function(){
    test();
});

let test = function () {
    console.log('js file linked to html');
    alert('js is connected to the html');
}; 


function book(name, genre, author, pages, read) {
    this.name = name;
    this.genre = genre;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.haveRead = function() {
        console.log(`I have ${this.read} ${this.name}`);
    };
};

const book01 = new book('the Lord of the Rings', 'Fantasy', 'J.J.R. Tolkien', '1000', 'read');

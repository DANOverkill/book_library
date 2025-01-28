const buttonTest = document.querySelector('#test');

buttonTest.addEventListener('click', function(){
    test();
});

let test = function () {
    console.log('js file linked to html');
    alert('js is connected to the html');
}; 

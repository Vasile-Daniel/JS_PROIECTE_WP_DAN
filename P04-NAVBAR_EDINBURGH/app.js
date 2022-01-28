// classList - show/gets allclasses 
// contains - checks classList for specific class 
// add - add a class 
// remove - remove a class 
// toggle - toggles a class 

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function (){
    // vreau sa stiu 'links' ce clase are 
    // console.log(links.classList);
    // console.log(links.classList.contains("random"));
    // console.log(links.classList.contains("links"));
    // console.log(links.classList.add("show-links"));

    // METODA 1 
    if (links.classList.contains('show-links')) {
        links.classList.remove('show-links');
    }
    else {
        links.classList.add('show-links');
    }

    // METODA 2 (face acelasi lucru ca si metoda 1)
    // links.classList.toggle('show-links');
});
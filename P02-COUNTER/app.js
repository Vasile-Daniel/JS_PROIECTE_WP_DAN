// set initial value to 0
let count = 0;

// select value and buttons 
let spanac = document.querySelector('#spanac');
let butoane = document.querySelectorAll(".btn");


butoane.forEach(function (ionica) {
    ionica.addEventListener('click', function(e) {
        const vasilica = e.currentTarget.classList;
        // console.log(e.currentTarget);
        // console.log(e.currentTarget.classList);
        /////////////////////////////////////////////////
        if(vasilica.contains('decrease')){
            count --;
        }
        else if(vasilica.contains('increase')){
            count++;
        }
        else {
            count = 0; 
        }
        ////////////////////////////////////////////////
        if (count > 0 ){
            spanac.style.color = 'green';
        }
        if (count < 0){
            spanac.style.color = 'red'; 
        }
        if (count === 0){
            spanac.style.color  = 'black'; 
        }
        /////////////////////////////////////////////////
        spanac.textContent = count; 
    });
});

// pentru fiecare buton din cele 3 (decrease, reset, increase): 
// 1. apas 'click' se intampla: 
//         a) 'styles' spune pe care dintre cele 3 butoane am apasat (Returns the object whose event listener's callback is currently being invoked.) 
//         b)  daca continutul este 'decrease', atunci scade 'count' cu o unitate
//             altfel, daca continutul este 'increase', atunci creste 'count' cu o unitate
//             altfel, inseamna ca am apasat 'reset' si atunci 'count' devine zero 
//         c) daca 'count' este pozitiv atunci cifra devine verde  (if count is pozitive, then the number is green)
//            daca 'count' este negativ atunci cifra devine rosie  (if count is negative, then the number is red)
//            daca 'count' este nul atunci cifra devine neagra     (if count is null, then the number is black)
//         d) continutul textului lui 'value' ia valoarea lui 'count'
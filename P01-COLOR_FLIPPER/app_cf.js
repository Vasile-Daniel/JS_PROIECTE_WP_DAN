// declara o lista (vector) cu 4 elemente (culori)
// fa legatura dintre html si javascript 
// 


const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const color = document.querySelector(".color");
const btn = document.getElementById("btn-id");



// Math.random() da un numar fractional aleatoriu intre 0 si 1 (dar nu 1)
// "Math.random() * colors.length" - da un nr. aleatoriu intre 0 si 4 (dar nu 4)
// "Math.floor()" - round down (rotunjeste inferior: ex - 3.75 => 3) 
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}

// obitne un numar intreg pozitiv aleatoriu intre [0,4)
// schimba culoarea din fundal 
// schimba denumirea culorii 


btn.addEventListener("click", function () {
    
    const randomNumber = getRandomNumber(); 
    color.textContent = colors[randomNumber];
    document.body.style.backgroundColor = colors[randomNumber];  
});


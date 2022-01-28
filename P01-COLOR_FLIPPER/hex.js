const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn-id");
const color = document.querySelector(".color");

// (1) Math.random() da un numar aleatoriu intre 0 si 1 (dar nu 1)
// (2) "Math.random() * colors.length" - da un nr. aleatoriu intre 0 si 16 (dar nu 16)
// (3) "Math.floor()" - round down (rotunjeste inferior: ex - 15.75 => 15)
// Din interior spre exterior:(1) -> (2) -> (3) 
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}

// cand apas 'click':
// 1. apelez de 6 ori functia 'getRandomNumber()' pentru a obtine un numar intreg aleator intre 0 si 15 
// 2. din vectorul 'hex' obtin valoarea de pe pozitia numarului intreg generat anterior 
// 2. adaug acesta valoare din 'hex' la stringul hexColor, adica in final o sa am 'hexColor = "#xxxxxx"  ' (x este unul din valorile din 'hex')
// 3. schimb cularea din fundal cu 'document.body.style.backgroundColor = hexColor'
// 4. schimb textul din clasa html '.color'
btn.addEventListener("click", function () {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
});



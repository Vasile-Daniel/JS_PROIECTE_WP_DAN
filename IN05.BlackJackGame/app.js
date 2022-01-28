// this is an object 
let player = {
    name : "Anonimus",
    chips : 145,
}
// Get Elements by ID 
let messageEl = document.getElementById("message-el"); 
let startGameEl = document.getElementById("button-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el"); 
//let sumEl = document.querySelector("#sum-el"); 


playerEl.textContent = player.name + ": $" + player.chips; 

let firstCard = getRandomCard();
let secondCard = getRandomCard(); 
let cards = []; 
let sum = 0;
let hasBlackJack = false;  
let isAlive = false; 
let message = ""; 

function renderGame(){
    // render out firstCard and secondCard 
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";  
    }
    // render out ALL the card we have
    sumEl.textContent = "Sum: " + sum; 
    if (sum <= 20){
        message = "Do you want to draw new card?"; 
    }
    else if (sum === 21){
        message = "You've got Blackjack";
        hasBlackJack = true; 
    }
    else{
        message = "You're out of the game!";
        // console.log(text3);
        isAlive = false; 
    }
    // log it out!
    messageEl.textContent = message; 
}

function startGame(){
    isAlive = true; 
    let firstCard = getRandomCard();
    let secondCard = getRandomCard(); 
    cards = [firstCard, secondCard]; 
    sum = firstCard + secondCard;
    renderGame(); 
}
function newCard(){
    if(isAlive === true && hasBlackJack === false){
    let card = getRandomCard(); // random()*(2 - 11) + 2;
    sum += card; 
    cards.push(card);
    renderGame(); 
    }
}

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1;
    if (randomNumber === 1){
        return 11;
    }
    else if (randomNumber > 10){
        return 10;
    }
    else {
        return randomNumber;
    }
}




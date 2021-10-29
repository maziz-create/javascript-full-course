let number;
const generateNumberBetween2and11 = () => {
    number = Math.floor(Math.random() * (12) + 2);
    return number;
}

let message = ""; //message for user
let hasBlackJack = false; //he has not blackjack
let isAlive = true; //he is alive

let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');

const startGame = () => {
    let firstCard = generateNumberBetween2and11();
    let secondCard = generateNumberBetween2and11();
    let sum = firstCard + secondCard;

    if (sum <= 20) {
        message = "Do you want to draw a new card? 😕"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳";
        hasBlackJack = true; //he has blackjack
    } else {
        message = "You're out of the game! 😔";
        isAlive = false; //he is dead
    }
    messageEl.textContent = message === "" ? "Want to play a round?" : message;
    sumEl.textContent = sum ? "Sum: " + sum : "Sum:"
    cardsEl.textContent = firstCard ? `Cards: ${firstCard} ${secondCard}` : "Cards";
}

const newCard = () => {
    console.log("Drawing a new card from the Deck!");
}
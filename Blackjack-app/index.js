let number;
const generateNumberBetween2and11 = () => {
    number = Math.floor(Math.random() * (12) + 2);
    return number;
}

let firstCard = generateNumberBetween2and11();
let secondCard = generateNumberBetween2and11();
let sum = firstCard + secondCard;
let hasBlackJack = false; //he has not blackjack
let isAlive = true; //he is alive
let message = ""; //message for user

if (sum <= 20) {
    message = "Do you want to draw a new card? 😕"
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true; //he has blackjack
} else {
    message = "You're out of the game! 😔";
    isAlive = false; //he is dead
}
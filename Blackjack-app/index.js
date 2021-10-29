let number;
const generateNumberBetween2and11 = () => {
    number = Math.floor(Math.random() * (11) + 2);
    return number;
}

let message = ""; //message for user
let hasBlackJack = false; //he has not blackjack
let isAlive = true; //he is alive

let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');

let firstCard, secondCard, sum;

const startGame = () => {
    renderGame();
}

const renderGame = (maybeItIsCard) => {
    firstCard = generateNumberBetween2and11();
    secondCard = generateNumberBetween2and11();

    if (maybeItIsCard === undefined) {
        sum = firstCard + secondCard;
        cardsEl.textContent = firstCard ? `Cards: ${firstCard} ${secondCard}` : "Cards";
    } else {
        sum += maybeItIsCard;
    }

    if (sum < 36) {
        if (sum <= 20) {
            message = "Do you want to draw a new card? 😕"
        } else if (sum === 21) {
            message = "Wohoo! You've got Blackjack! 🥳";
            hasBlackJack = true; //he has blackjack
        } else {
            message = "You're out of the game! 😔";
            isAlive = false; //he is dead
        }
    } else {
        alert(`You have no right to use it because you're out of the game!`);
        return;
    }

    messageEl.textContent = message === "" ? "Want to play a round?" : message;
    sumEl.textContent = sum ? "Sum: " + sum : "Sum:";
}

const newCard = () => {
    console.log("Drawing a new card from the Deck!");

    let card = generateNumberBetween2and11();

    renderGame(card);
}
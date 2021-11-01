let number;
let message = ""; //message for user
let hasBlackJack = false; //he has not blackjack
let isAlive = true; //he is alive
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');
let firstCard, secondCard, sum;
let cardsArray = [];

const startGame = () => {
    renderGame();
}

const renderGame = (maybeItIsCard) => {

    if (maybeItIsCard === undefined) {
        firstCard = generateNumberBetween1and10();
        secondCard = generateNumberBetween1and10();
        cardsArray = [firstCard, secondCard];
        sum = firstCard + secondCard;
        writeCardsContent(cardsArray);
    } else {
        sum += maybeItIsCard;
        writeCardsContent(cardsArray);
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card? 😕"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳";
        hasBlackJack = true; //he has blackjack
    } else if (sum > 21) {
        message = "You're out of the game! 😔";
        alert(message);
        isAlive = false; //he is dead
        if (maybeItIsCard !== undefined) {
            sum += maybeItIsCard;
        }
        writeCardsContent(cardsArray);
        if (sum <= 38) writeSumContent(); // 3 kart en fazla 30 yapar. 10+10+10
        return;
    }
    writeMessageContent();
    writeSumContent();
}

const newCard = () => {
    let card = generateNumberBetween1and10();
    if (isAlive) cardsArray.push(card);
    renderGame(card);
}

//generating random numbers
const generateNumberBetween1and10 = () => {
    number = Math.floor(Math.random() * (13) + 1);
    if (number == 1) return 11;
    if (number > 10 && number < 14) return 10;
    return number;
}

//HTMLElement.textContent functions

const writeCardsContent = (arrayOfCards) => {
    cardsEl.textContent = firstCard
        ? `Cards: ${arrayOfCards.map((card) => card)}`
        : "Cards";
}

const writeSumContent = () => {
    sumEl.textContent = sum ? "Sum: " + sum : "Sum:";
    sumEl.style.backgroundColor =
        sum >= 22 ? "red"
            : sum == 21 ? "green"
                : "transparent";
}

const writeMessageContent = () => {
    messageEl.textContent = message === "" ? "Want to play a round?" : message;
}
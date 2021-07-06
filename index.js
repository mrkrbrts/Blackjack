let player = {
    name: "Mark",
    chips: 500
}

let cards = []
let sum = 0

let hasBlackJack = false
let isAlive = false

let message = ""
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.querySelector("#player-el");

playerEl.textContent = `Player ${player.name}: £${player.chips}`;

function getRandomCard() {
    let randomNumber = Math.ceil(Math.random() * 13)
    
    if (randomNumber >= 11) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    // for loop that renders out all the cards instead of just two
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    // re-render Sum and Cards elements
    sumEl.textContent = `Sum = ${sum}`

    // else/if statement to decide Blackjack, and renders out Message
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        // Push the card to the cards array
        cards.push(card)
        console.log(cards)
        renderGame()
    }
}
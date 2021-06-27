let firstCard = 9
let secondCard = 11
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

function startGame() {
    renderGame();
}

function renderGame() {
    // re-render Sum and Cards elements
    sumEl.textContent = `Sum = ${sum}`
    cardsEl.textContent = `Cards = ${cards[0]} + ${cards[1]}`

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
    let newCard = 6;
    sum = sum + newCard;
    cards.push(newCard)
    renderGame();
}
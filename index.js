let player = {
    name: "Mark",
    chips: 500
}

let cards = []
let sum = 0
let count = 0
let cardCount = []

let hasBlackJack = false
let isAlive = false

let message = ""
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.querySelector("#player-el");

let newGameBtn = document.querySelector("#new-game-btn")
let startGameBtn = document.querySelector("#start-game-btn")
let newCardBtn = document.querySelector("#new-card-btn")

let card1 = document.querySelector("#card1")
let card2 = document.querySelector("#card2")
let card3 = document.querySelector("#card3")
let card4 = document.querySelector("#card4")
let card5 = document.querySelector("#card5")
let card6 = document.querySelector("#card6")
let card7 = document.querySelector("#card7")
let card8 = document.querySelector("#card8")
let card9 = document.querySelector("#card9")
let card10 = document.querySelector("#card10")
let card11 = document.querySelector("#card11")
let card12 = document.querySelector("#card12")

let allCards = [card1,card2,card3,card4,card5,card6,card7,card8,card9,card10,card11,card12]

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
    hasBlackJack = false;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    cardCount = [card1,card2]
    cardCount[0].style.display="inline-block"
    cardCount[0].innerHTML=`<div class="card-value">${firstCard}</span>`
    cardCount[1].style.display="inline-block"
    cardCount[1].innerHTML=`<div class="card-value">${secondCard}</span>`
    count = 2
    renderGame();
    renderButtons();
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

function renderButtons() {
    startGameBtn.style.display="none"
    newGameBtn.style.display="block"
    newCardBtn.style.display="block"
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        count++
        card
        // Push the card to the cards array
        cards.push(card)
        cardCount.push(allCards[count-1])
        cardCount[count-1].style.display="inline-block"
        cardCount[count-1].innerHTML=`<div class="card-value">${card}</span>`
        console.log(cards)
        renderGame()
    }
}

function resetCards() {
    for (let i=0; i<count;i++){
        allCards[i].style.display="none";
    }
}

function newGame() {
    resetCards()
    startGame()
}


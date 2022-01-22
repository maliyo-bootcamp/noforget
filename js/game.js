
let lockBoard = false
let hasFlippedCard = false
let firstCard, secondCard
let numberOfMoves = 10
const cards = document.querySelectorAll('.memory-card'),
  greetText = document.querySelector("#greetings")
  movesLeftText = document.getElementById("remainingMoves")
  


function greetPlayer () {
  const playerName = localStorage.getItem("player-name")
  if (playerName === null) {
    location.replace("/")
    return
  }
  greetText.textContent = `Welcome ${playerName}`
}
greetPlayer()

function updateMoves (moves) {
  const text = `You have ${moves} moves left` 
  movesLeftText.textContent = text
}

updateMoves(numberOfMoves)

function flipCard () {
  if (numberOfMoves === 0) {
    location.replace("/gameover.html")
  }
  if (lockBoard) return
  if (this === firstCard) return
  this.classList.add('flip')

  if (!hasFlippedCard) {
    hasFlippedCard = true
    firstCard = this
    // console.log(firstCard, "first-card")
    return
  }
  secondCard = this
  // console.log(secondCard, "second-card")
  checkForMatch()
}


function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false]
  [firstCard, secondCard] = [null, null]
}

function unflipCards() {
  lockBoard = true
  numberOfMoves -= 1
  updateMoves(numberOfMoves)
  setTimeout(() => {
    firstCard.classList.remove('flip')
    secondCard.classList.remove('flip')
    resetBoard()
  }, 1500)
}

function checkForMatch () {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework
  // console.log(firstCard.dataset.framework)
  // console.log(secondCard.dataset.framework)
  isMatch ? disableCards() : unflipCards()
}

function disableCards () {
  firstCard.removeEventListener('click', flipCard)
  secondCard.removeEventListener('click', flipCard)
  resetBoard()
}

(function shuffleCards() {
  const cardsLength = cards.length
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * cardsLength)
    card.style.order = randomPos.toString()
  })
  console.log('deck shuffled')
})()

cards.forEach(card => card.addEventListener("click", flipCard))
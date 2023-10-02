// Generate a random number
let randomNumber = Math.floor(Math.random() * 100 + 1)

const submitBtn = document.getElementById('submitBtn')
const userInput = document.getElementById('userInput')
const guessSlot = document.querySelector('.guesses')
const guessesRemaining = document.querySelector('.guessesRemaining')
const lowOrHi = document.querySelector('.lowOrHi')
const results = document.querySelector('.results')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if (playGame) {
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log("guess", guess);
        validateGuess(guess)
    })
}

const validateGuess = (guess) => {
    if (isNaN(guess)) {
        alert("Please enter a valid number!")
    } else if (guess < 1) {
        alert("Please enter a number more than 1!")
    } else if (guess > 100) {
        alert("Please enter a number less than 100!")
    } else {
        prevGuess.push(guess)
        if (numGuess >= 10) {
            displayGuess(guess)
            displayMsg(`Game Over. Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

const checkGuess = (guess) => {
    if (guess === randomNumber) {
        displayMsg(`You Guessed it righ, ${prevGuess[0]} is correct!`)
        endGame()
    } else if (guess < randomNumber) {
        displayMsg('Number is Tooo low!')
    } else if (guess > randomNumber) {
        displayMsg('Number is Tooo high!')
    }
}
// clean guess 👇
const displayGuess = (guess) => {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++
    guessesRemaining.innerHTML = `${11 - numGuess}`
}

const displayMsg = (message) => {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

const endGame = () => {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
    results.appendChild(p)
    playGame = false
    newGame()
}

const newGame = () => {
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click', () => {
        randomNumber = Math.floor(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        guessesRemaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        results.removeChild(p)
        playGame = true
    })
}

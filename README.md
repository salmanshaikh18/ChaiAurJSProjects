# Project related to DOM

## Project Link
[Click Here]('Project1_live_hosted_link')

# Solution Code

## Project 1 Solution
```javascript
const buttons = document.querySelectorAll('.box')
const body = document.querySelector('body')

buttons.forEach((button) => {
    console.log(button)
    button.addEventListener('click', (eventObject) => {

        // console.log(eventObject)
        // console.log(eventObject.target)
        
        if(eventObject.target.id === 'grey') {
            body.style.backgroundColor = 'grey'
        }
        else if (eventObject.target.id  === 'white') {
            body.style.backgroundColor = '#fff'
        }
        else if (eventObject.target.id === 'blue') {
            body.style.backgroundColor = "blue"
        }
        else if (eventObject.target.id === 'yellow') {
            body.style.backgroundColor = 'yellow'
        }
    })
})

```

## Project 2 Solution
```javascript
const form = document.querySelector('form') 

form.addEventListener('submit', (e) => {
    e.preventDefault()
    // get a height and width from input tags and convert string into integer
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = "Please give a valid height!"
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Please give a valid weight"
    } else {
        const BMI = (weight / ((height * height)/10000)).toFixed(2)
        // toFixed(2) meansshow only 2 decimal value
        // show the results 
        let BmiResult = ''
        if (BMI < 18.6) {
            BmiResult = 'Under Weight'
        } else if (BMI >= 18.6 && BMI <= 24.9) {
            BmiResult = 'Normal Range'
        } else if (BMI > 24.9) {
            BmiResult = 'Over Weight'
        }
        results.innerHTML = `<span>${BMI}</span>
        <span>Your BMI is in ${BmiResult}</span>`
    }

})
```

## Project 3 Solution
```javascript
const time = document.getElementById('time')

setInterval(() => {
    let date = new Date()
    // console.log(date.toLocaleTimeString())
    time.innerHTML = date.toLocaleTimeString()
}, 1000)
```

## Project 4 Solution
```javascript
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
```
// 1st Solution
// const box1 = document.querySelector('.box1')
// const box2 = document.querySelector('.box2')
// const box3 = document.querySelector('.box3')
// const box4 = document.querySelector('.box4')

// box1.addEventListener('click', () => {
//     document.body.style.background = 'grey'
// })
// box2.addEventListener('click', () => {
//     document.body.style.background = '#fff'
// })
// box3.addEventListener('click', () => {
//     document.body.style.background = 'blue'
// })
// box4.addEventListener('click', () => {
//     document.body.style.background = 'yellow'
// })

//--------------------------------------------

// 2nd Solution
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



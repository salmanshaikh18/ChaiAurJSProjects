# Project related to DOM

## Project Link
[Click Here]('Project1_live_hosted_link')

# Solution Code

## Project 1
```
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
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


const time = document.getElementById('time')

setInterval(() => {
    let date = new Date()
    // console.log(date.toLocaleTimeString())
    time.innerHTML = date.toLocaleTimeString()
}, 1000)
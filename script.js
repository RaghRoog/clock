let secondsDisplay = document.querySelector('.seconds')
let minutesDisplay = document.querySelector('.minutes')
let hoursDisplay = document.querySelector('.hours')
function clock(){
let d = new Date
let hours = d.getHours()
let minutes = d.getMinutes()
let seconds = d.getSeconds()
    if (hours<=9){
        hoursDisplay.textContent = '0' + hours
    }else{
        hoursDisplay.textContent = hours
    }
    if (minutes<=9){
        minutesDisplay.textContent = '0' + minutes
    }else{
        minutesDisplay.textContent = minutes
    }
    if (seconds<=9){
        secondsDisplay.textContent = '0' + seconds
    }else{
        secondsDisplay.textContent = seconds
    }
}

setInterval(clock, 1000)
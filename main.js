const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const classicClock = document.querySelector('.clock')

const flapSec = document.querySelector('.flap-sec')
const flapMin = document.querySelector('.flap-min')
const flapHour = document.querySelector('.flap-hour')
const flapClock = document.querySelector('.flap-clock')


const clockChanger = document.querySelector('.change-clock-type')

function setDate() {

    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360);
    secondHand.style.transform = `rotate(${90 + secondsDegrees}deg)`


    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360);
    minuteHand.style.transform = `rotate(${90 + minutesDegrees}deg)`


    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360);
    hourHand.style.transform = `rotate(${90 + hoursDegrees}deg)`

    // for flap-clock

    if (seconds < 10) {
        flapSec.innerHTML = `0${seconds}`
    } else {
        flapSec.innerHTML = seconds
    };


    if (minutes < 10) {
        flapMin.innerHTML = `0${minutes}`
    } else {
        flapMin.innerHTML = minutes
    };


    if (hours < 10) {
        flapHour.innerHTML = `0${hours}`
    } else {
        flapHour.innerHTML = hours
    };
}

setInterval(setDate, 1000)




function noVisibleClock() {
    classicClock.classList.toggle("display-clock");
    flapClock.classList.toggle("display-clock");

}

clockChanger.addEventListener('click', noVisibleClock);
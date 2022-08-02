//variables
const playBtn = document.querySelector(".play");
const stopBtn = document.querySelector(".stop");
const plusBtn = document.querySelector(".plus");
const minusBtn = document.querySelector(".minus");
const forestBtn = document.querySelector(".forest");
const forestOnBtn = document.querySelector(".forestOn");
const rainBtn = document.querySelector(".rain");
const rainOnBtn = document.querySelector(".rainOn");
const coffeeShopBtn = document.querySelector(".coffeeShop");
const coffeeShopOnBtn = document.querySelector(".coffeeShopOn");
const fireplaceBtn = document.querySelector(".fireplace");
const fireplaceOnBtn = document.querySelector(".fireplaceOn");
const itemOn = document.getElementsByClassName('select');

const forestAudio = new Audio('./sounds/Floresta.wav');
const rainAudio = new Audio('./sounds/Chuva.wav');
const fireplaceAudio = new Audio('./sounds/Lareira.wav');
const coffeeShopAudio = new Audio('./sounds/Cafeteria.wav');

const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");
let minutes = Number(minutesDisplay.textContent);
let timerTimeOut;

// Functions
function countdown() {
    timerTimeOut = setTimeout(function() {
        let minutes = Number(minutesDisplay.textContent);
        let seconds = Number(secondsDisplay.textContent);

        updateDisplay(minutes, 0);
        
        if (minutes <= 0) {
            return
        }
        
        if (seconds <= 0) {
            seconds = 60
            --minutes
        }

        updateDisplay(minutes, String(seconds - 1))

        countdown()
    }, 100)
}

function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
}

//Events
playBtn.addEventListener('click', function() {
    countdown()
})

stopBtn.addEventListener('click', function() {
    clearTimeout(timerTimeOut)
})

plusBtn.addEventListener('click', function() {
    minutes = minutes + 5;
    minutesDisplay.textContent = minutes;
})

minusBtn.addEventListener('click', function() {
    minutes = minutes - 5;
    minutesDisplay.textContent = minutes;
})

forestBtn.addEventListener('click', function() {
    forestBtn.classList.toggle('hide')
    forestOnBtn.classList.toggle('hide')
    forestOnBtn.classList.toggle('select')
    console.log(itemOn)
    forestAudio.play()
})

forestOnBtn.addEventListener('click', function() {
    forestBtn.classList.toggle('hide')
    forestOnBtn.classList.toggle('hide')
    forestOnBtn.classList.toggle('select')
    forestAudio.pause()
})

rainBtn.addEventListener('click', function() {
    rainBtn.classList.toggle('hide');
    rainOnBtn.classList.toggle('hide');
    rainOnBtn.classList.toggle('select');
    itemOn.item(0).classList.remove('select')
    console.log(itemOn)
    rainAudio.play()
})

rainOnBtn.addEventListener('click', function() {
    rainBtn.classList.toggle('hide');
    rainOnBtn.classList.toggle('hide');
    rainOnBtn.classList.toggle('select');
    rainAudio.pause()
})

coffeeShopBtn.addEventListener('click', function() {
    coffeeShopBtn.classList.toggle('hide')
    coffeeShopOnBtn.classList.toggle('hide')
    coffeeShopOnBtn.classList.toggle('select')
    coffeeShopAudio.play()
})

coffeeShopOnBtn.addEventListener('click', function() {
    coffeeShopBtn.classList.toggle('hide')
    coffeeShopOnBtn.classList.toggle('hide')
    coffeeShopOnBtn.classList.toggle('select')
    coffeeShopAudio.pause()
})

fireplaceBtn.addEventListener('click', function() {
    fireplaceBtn.classList.toggle('hide')
    fireplaceOnBtn.classList.toggle('hide')
    fireplaceOnBtn.classList.toggle('select')
    fireplaceAudio.play()
})

fireplaceOnBtn.addEventListener('click', function() {
    fireplaceBtn.classList.toggle('hide')
    fireplaceOnBtn.classList.toggle('hide')
    fireplaceOnBtn.classList.toggle('select')
    fireplaceAudio.pause()
})


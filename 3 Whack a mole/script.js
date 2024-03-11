const squares = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');

const time = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let hitPosition;
let currentTime = 10;

function randomSquare() {
    squares.forEach((square) => {
        square.classList.remove('mole');
    });

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id;
}

squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        if (square.id == hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
})

function moveMole() {
    let timeId = null;
    timeId = setInterval(randomSquare, 500);
}

const start = document.querySelector('.start');

start.addEventListener('click',()=>{
    moveMole();
    let countDownTimerID = setInterval(countdown, 1000);
});


function countdown() {
    currentTime--;
    time.textContent = currentTime;

    if (currentTime === 0) {
        clearInterval(countDownTimerID);
        alert('GAME OVER ! Your final score is ' + result);
        result = 0;
        score.textContent = result;
    }
}





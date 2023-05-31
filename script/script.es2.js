console.log('JS OK');

// Recover Element from DOM

const playButtonElement = document.getElementById('play-button');
const playerNumberElement = document.getElementById('player-number');
const pcNumberElement = document.getElementById('pc-number');
const resultElement = document.getElementById('result');

// Result

let result = 'Parità'


// Variable for min and max
const min = 1;
const max = 6;



// Event Listener Click

playButtonElement.addEventListener('click', function() {
    
    // Random Number

    const randomNumberPc = Math.floor(Math.random() * max) + 1;

    const randomNumberPlayer = Math.floor(Math.random() * max) + 1;
    console.log(randomNumberPc, randomNumberPlayer);

    // Condition
    if (randomNumberPc > randomNumberPlayer) {
        result = 'Il computer ha vinto'
    }   else if (randomNumberPc < randomNumberPlayer) {
        result = 'Hai Vinto'
    }

    playerNumberElement.innerText = 'Il tuo Numero è ' + randomNumberPlayer;
    pcNumberElement.innerText = 'Il tuo Numero è ' + randomNumberPc;
    resultElement.innerText = result;
})
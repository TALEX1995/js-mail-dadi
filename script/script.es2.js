console.log('JS OK');

// Result

let result = 'Parità'


// Variable for min and max
const min = 1
const max = 6


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

console.log(result)
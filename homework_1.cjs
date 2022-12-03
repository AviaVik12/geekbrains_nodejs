const prnt = require('colors');

const [from, to] = process.argv.slice(2).map(item => parseInt(item));


if (isNaN(from) || isNaN(to)) {
    console.log('Invalid input!');
};


let b = 0

const colorizer = (number) => {
    const trafficLightColors = ['green', 'yellow', 'red'];

    console.log(prnt[trafficLightColors[b]](number));
    
    if (b === trafficLightColors.length - 1) {
        b = 0;
    } else {
        b++;
    };
};


const isPrime = (number) => {
    if (number <= 1) {
        return false;
    };

    let a = 2;

    while (a < number) {
        if (number % a === 0) {
            return false;
        };

        a++;
    };

    return true;
};


let f = from;
let exists = false;

while (f <= to) {
    if (isPrime(f)) {
        colorizer(f);
        exists = true;
    };

    f++;
};


if (!exists) {
    console.log('Invalid range of numbers!');
};




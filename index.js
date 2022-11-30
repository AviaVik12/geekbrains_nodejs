// console.log('Hello from index.js');

// const colors = require('colors');

import colors from 'colors';

const [u1, u2] = process.argv.splice(2);

console.log(`Hello, ${colors.green(u1)} and ${colors.yellow(u2)}!`);

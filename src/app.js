// // import './utils';
// import { square, add } from './utils.js';

// console.log('app.js is running...!');
// console.log('square of 4: ', square(4));
// console.log('add 4 + 5: ', add(4,5));

// person.js
// named export isAdult - true of adult, false if not
// named export canDrink - true if can drink, false if not

// import isAdult and canDrink
// use both and make them print to console

import { canDrink, isAdult } from './person.js';

const myAge = 28;
const underage = 19;

console.log('myAge', myAge);
console.log('underage', underage);

console.log('Can I drink?', canDrink(myAge));
console.log('Can you drink?', canDrink(underage));

console.log('Am I an adult?', isAdult(myAge));
console.log('Are you an adult?', isAdult(underage));

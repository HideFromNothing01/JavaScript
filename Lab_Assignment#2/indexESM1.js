import * as esmModule1 from './esmModule1.js';

// Use Function1: no return, just accepting a text as an input with two or three parameter/arguments
esmModule1.printGreeting('Hidetoshi', 'Okada');

// Use Function2: : Return a double value for converting a measurement unit to another one
const pound = 2;
console.log(`${pound} lb is ${esmModule1.poundToKilogram(pound)} Kg.`);

// Use Function3: 
const number = 5;
console.log(`The factrial of ${number} is ${esmModule1.factorial(number)}.`);

// Use Function4: Any function you like
const radius = 3;
console.log(`Area of the circle with radius ${radius} is ${esmModule1.circleArea(radius)}`);
// Function1: no return, just accepting a text as an input with two or three parameter/arguments
export function printGreeting(firstName, lastName) {
    console.log(`Hi ${firstName} ${lastName}. Welcome to Canada.`);
}

// Function2: Return a double value for converting a measurement unit to another one
export function poundToKilogram(lb) {
    return lb*0.454;
}

// Function3: 
export function factorial(number) {
    if (number < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    if (number === 0 || number === 1) {
        return 1;
    }
    return number * factorial(number - 1);
}

// Function4: Advanced function - Calculate the area of a circle
export function circleArea(radius) {
    return Math.PI * radius * radius;
}
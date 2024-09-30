// const fs = require('fs');

// Read the file asynchronously
// fs.readFile('sample.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading the file:', err);
//         return;
//     }
//     // Output the content to the terminal
//     console.log(data);
// });


// imports the 'readFile' and 'readFileSync' functions
// from the Node.js fs (file system) module
const {readFile, readFileSync} = require('node:fs');

// calls the readFile function: read asynchronously. (path, encoding, callback function)
readFile('./sample.txt', 'utf-8', (err, data) => {
    
    if (err) throw err; // for error message!!
    console.log(data); // here is my sample.txt text file!
});

//this file reading operation does not block the execution of other code - "asynchronously"
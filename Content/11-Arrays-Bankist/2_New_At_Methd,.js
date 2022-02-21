'use strict';
const arr = [23, 11, 64];
console.log(arr[0]); // Traditonal Way
console.log(arr.at(0)); // New Method

//Getting Last Array Element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1)); // It accept negative index

// Also work on str
console.log('jonas'.at(0));

'use strict';
// DATA TRANSFROMATION --> MAP | FILTER | REDUCE ------------

// [1] MAP
const arr = [3, 1, 4, 3, 2];

const mapArr = arr.map(current => current * 2); // Multiply every element by 2
console.log(mapArr);

// Map return a new array containing the result of applying an operation on all original array elements.

// [2] FILTER

const filterArr = arr.filter(current => current > 2); //
console.log(filterArr);

// Filter return a new array containing the array element that passed a specific test condition.

// [3] REDUCE

const reduceArr = arr.reduce((acc, current) => acc + current);
console.log(reduceArr);
// reduce boils ("reduce") all array elements down to one single value(eg.adding all elements together)

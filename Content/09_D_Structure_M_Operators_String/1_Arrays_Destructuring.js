'use strict';

//Destructuring Arrays

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Oraganic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

const [x, y, z] = arr; // Using Destruturing
console.log(x, y, z);
console.log(arr);

const [first, second] = restaurant.categories;
console.log(first, second);
restaurant;

let [main, , secondary] = restaurant.categories; //To get at specific index we use hole/Space
console.log(main, secondary);

//Now in-case to switch & Assign Main = Secondary & Vice Versa [Switching Variables]

//Using tempory Variable In Middle
// const temp = main;
// main = secondary;
// main;
// secondary = temp;
// secondary; //Without Using Destructuring
// console.log(main, secondary);

//SWICHING VARIABLES-- Using Destructuring
[main, secondary] = [secondary, main]; //This is lot easier
console.log(main, secondary);

//Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nested Array -- Destructuring
const nested = [2, 4, [5, 6]];
const [i, , j] = nested;
console.log(i, j);
const [g, , [, r]] = nested; // We need to do Destructuring Inside of Destructuring
console.log(g, r);

//Default Values

const def = [8, 9];
//If there is no value at v then it return undefined
const [s, t, v] = def;
console.log(s, t, v); //
const [m, n, o = 1] = def;
console.log(m, n, o);

'use strict';
//REST PATTERNS AND PARAMETERS

/* USE CASE
   1) It is opposite of spread operator.
   2) Rest operator use multiple individual and condensed them to creat new Array. 
   3) Rest for packing an element into array.
   4) Rest Always be in last in Destructuring Assignment
   5) Always one Rest in Destructuring

*/

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Oraganic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //Whre MainIng is requried & other ing are optional
  OrderPizza: function (mainIng, ...otherIng) {
    // funCall-Line(78)
    console.log(mainIng);
    console.log(otherIng);
  },
};
// [1]DESTRUCTURING

// 01]Arrays

// i) SPREAD , because on RIGHT side of =
const a = [3, 4];
const arr = [1, 2, ...a];
console.log(arr);

// ii)REST , because on LEFT side of =

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
]; //Rest -- just packed rest of the element in an array & does not include any skip element
console.log(pizza, risotto, otherFood);

// 02] Objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

// [2]FUNCTIONS
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum = sum + numbers[i];
  console.log(sum);
};
add(2, 4);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x); // unpaking x using spread & then packing it in function parameter using(spread) ...numbers .
add(x); //if only pass array then it will spread it

//Whre MainIng is requried & other ing are optional
restaurant.OrderPizza('mushroom', 'onion', 'olives', 'spinach');

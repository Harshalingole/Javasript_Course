// 'use strict';
//Looping Arrays -- The For Of Loops
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

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
  console.log(item);
}
for (const item of menu.entries()) {
  console.log(item);
}
// console.log([...menu.entries()]);
// menu.entries() --> Array Entries

//Old Shool Method
for (const item of menu.entries()) {
  console.log(`${item[0] + 1} : ${item[1]}`);
}
//ES6 Method -- Destructuring Arrays
for (const [i, el] of menu.entries()) {
  //As item here is Array
  console.log(`${[i + 1]} : ${el}`);
}

var abc = '5' + 1 + 3;
abc;
var xyz = 'Hii',
  y = 21;
xyz;
y;

var A;
var B = 20;
const xy = A && B;
if (A && B) {
  console.log('Hii');
}
xy;
for (i = 0; i < 7; ) {
  i++;
  console.log(i);
}

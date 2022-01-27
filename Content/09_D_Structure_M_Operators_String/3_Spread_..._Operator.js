'use strict';
//SPREAD OPERATOR (...)

/* USE CASE 
   1) When we need individual item of an array then we use spread operator.
   2) When we need to pass multiple parameter in function.
   3) Spread Operator is also similar to Destructuring as it helps to take array element out of array and also dosent creat new variables.
   4) We can only use in places where we would require to write value sperated by commas.
   5) Spread Operator Works on All so Called Iterables.
       ? What Are Iterables : Arrays, string, maps, sets, ..Not objects
   6) We can also use spread operator in objects that is Curly brackets{} to unpacked.
   7) Multiple Value Seperated by Comma are only expected when we pass value in function or in new Array
   8) We cannot use spread Operator inside temperate leteral `${...str}`
*/
//Normal Array
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

//Using Spread Operator
const newArr = [1, 2, ...arr];
//Spread is taking all the element outside of an array and write manually inside of newArr
console.log(newArr);

//Example for Use Case

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
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order Recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be diliverd to ${address} at ${time}`
    );
  },
  pastaIng: ['tomota', 'ketchup', 'banana'],
  //order pasta - which have 3 ingredients
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your declicius pasta with ${ing1}, ${ing2}and ${ing3}`
    );
  },
};
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sol, 21',
  mainIndex: 2,
  starterIndex: 2,
});
console.log(restaurant.orderPasta(...restaurant.pastaIng));

//Creating NewmainMenu Not manipulating original array
const newMainMenu = ['Somasa', 'Bhujia', ...restaurant.mainMenu];
console.log(newMainMenu);

//Crating SHALLOW COPY Array  - Simialr to (object.assign) method
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// JOIN 2 Arrays
const wholeMenu = [...restaurant.starterMenu, ...restaurant.mainMenu]; // join 2 array that are starterMenu & mainMenu to creat whole menu
console.log(wholeMenu);

/*  What Are Iterables : Arrays, string, maps, sets, ..Not objects
-- > Most of Build in data types are Iterables execpt OBJCETS
*/

const str = 'Jonas';
const letters = [...str, '', 'S']; //We just simply unpacked string
const letter = { ...str };
console.log(letter);
console.log(letters);
// console.log(`${..str} harshal`) //Spred Operator Not work in temperate literal

//Objects
const newRestaurant = { foundedIn: 1991, ...restaurant, founder: 'Harshal' };
console.log(newRestaurant);

//Shallow copy
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Harsh Bar';
console.log(restaurantCopy.name);
console.log(restaurant.name);

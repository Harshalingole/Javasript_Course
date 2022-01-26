// Destructuring Objects
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
  orderDelivery: function({starterIndex, mainIndex, time, address}) {
    console.log(`Order Recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be diliverd to ${address} at ${time}`)
  }
};
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sol, 21',
  mainIndex: 2,
  starterIndex: 2,
});

//To destructure Objects We uses curly brackets{}
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Assigning differnt variable name
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant; 
console.log(restaurantName, hours, tags);

//Default Values - if its not exist
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating Variables
let a = 111;
let b = 999;
const obj = {a:23,b:7,c:14};
({a,b}) = obj;  // We need to use paranthesis() bcz if we just simply use curly braces {} then js will treat it as code block 
console.log(a,b)

//Nested Objects
const {fri: {open: o, close: c},} = openingHours;
console.log(o,c);




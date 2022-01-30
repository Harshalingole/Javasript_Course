//---------------ENHANCED OBJECT LETERAL-----------
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  /*thu*/ [weekdays[3]]: {
    /* New method inside this[]*/ open: 12,
    close: 22,
  },
  /*fri*/ [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  /*sat*/ [`day-${2 + 4}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Oraganic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //Before ES6--if we want openingHours in restaturent object
  // openingHours: openingHours,
  //After ES6--1st method(object)
  openingHours,
  //Before ES6
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //After ES6 -- newSyntax(for function)
  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order Recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be diliverd to ${address} at ${time}`
    );
  },
};
console.log(restaurant);

// ---------- OPTIONAL CHANING ----------
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  /*thu*/ [weekdays[3]]: {
    /* New method inside this[]*/
    open: 12,
    close: 22,
  },
  /*fri*/ [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  /*sat*/ [weekdays[5]]: {
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

//Before Optional Chaning
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//After Optional Chaining
console.log(restaurant.openingHours.mon?.open); //here it check (mon property exist or not)
console.log(restaurant.openingHours?.mon?.open); //it check for two propety exist or not(openingHours and then mon)

//Example
for (const day of weekdays) {
  const open = restaurant.openingHours[day]?.open ?? 'Closed';
  console.log(`On ${day}, we open at ${open}`);
}

//Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

//Arrays
const users = [{ name: 'Jonas', email: 'hellojonas.io' }];

console.log(users[0]?.name ?? 'User array empty');
console.log(users[3]?.name ?? 'User array empty');

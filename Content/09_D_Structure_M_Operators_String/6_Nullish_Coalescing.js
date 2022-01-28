'use strict';
//--------Nulish Coalescing ?? Operator -------

// Note : Nulish works with idea of nulish values that are (null or undefinded) but not with falsy values which are( 0 or '')
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
  order: function (starterIndexddfjdk, mainIndex) {
    return [this.starterMenu[starterIndexddfjdk], this.mainMenu[mainIndex]];
  },
  //Whre MainIng is requried & other ing are optional
  orderPizza: function (mainIng, ...otherIng) {
    // funCall-Line(78)
    console.log(otherIng);
    console.log(mainIng);
  },
};

//When We assign restaurent.numGuests = 0
restaurant.numGuests = 0;
// P1) -->In case OR -- its returning 10 but we want it as 0;
const guest = restaurant.numGuests || 10;
guest;

//To Solve P1 -- We can use ?? operator
const guestCorrect = restaurant.numGuests ?? 10; // As 0 is not nullish value its short curcted and return restaturent.numGuest value.
//Nulish: null and undefined (Not 0 or "")
guestCorrect;

//-----Logical Assignment Operator-------
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

const rest1 = {
  name: 'Capri',
  // numGuests: 0,
  numGuests: 20,
};

const rest2 = {
  name: 'La Piaza',
  owner: 'Giovami Rossi',
  numGuests: 0,
};

// rest1.numGuests = rest1.numGuests || 10; // = Line 28
// rest2.numGuests = rest2.numGuests || 10;
// console.log(rest1.numGuests);
// console.log(rest2.numGuests);

//1) OR || Assignment Operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;
// console.log(rest2.numGuests);
// console.log(rest1.numGuests);

//2) Nulish ?? Assignment Operator
// rest2.numGuests ??= 10;
// rest1.numGuests ??= 10;
// console.log(rest1.numGuests);

// console.log(rest2.numGuests);

//2) And && Assignment Operator
// rest1.owner = rest1.owner && 'ANONYMOUS';
// rest2.owner = rest2.owner && 'ANONYMOUS';
rest1.owner &&= 'ANONYMOUS';
rest2.owner &&= 'ANONYMOUS';
// rest1.numGuests ??= 10;
console.log(rest1.owner);
console.log(rest2.owner);

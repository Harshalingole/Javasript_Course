'use strict';
//Short Circuting (&& And ||)
/* LOGICAL OPERATOR
   /USE CASE /
   1)Use Any type, return Any Type, short-cir
   
   /NOTE/
   1) OR || -- if Value is(Truthy)-->Evaluation Stoped & value return.
   2) And && -- i)if Value is(Falsy)-->Evaluation Stoped & value return.      ii) Else return last value(whether it is 'True or False)

*/
// ---------[01] OR Operator || ------------

//[N]- OR operator return first "TRUTHY" Value
console.log(3 || 'jonas');
console.log('' || 'jonas');
console.log(true || 'jonas');
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);
console.log(undefined || 0 || '' || 14 || 'Hello' || 23 || null);

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
  orderPizza: function (mainIng, ...otherIng) {
    // funCall-Line(78)
    console.log(mainIng);
    console.log(otherIng);
  },
};
//--------Practicle Implication ----- OR

// 1) Setting An Default Value
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10; // Ternary Operator
console.log(guest1);

//if restaurant.numGuest = 0 then it will not work in both && and ||
//Easiest Way using OR Operator to Set Default Vlaue
const guest2 = restaurant.numGuest || restaurant.name || 10; //when Exist
console.log(guest2);

const guest3 = restaurant.numGuest || restaurant.notExist || 10; //Not Exist Then Defult Value
console.log(guest3);
// ---------[02] And Operator && ------------

//--------Practicle Implication ----- And &7

//[N]- And &&  operator return  "FALSY" Value if one of them is false

console.log(0 && 'jonas');
// if first value is truthy then evaluation continue and return second/last value whether its is truthy or falsy value
console.log(7 && 'jonas');
console.log(7 && 0);
console.log(7 && 0);
console.log(1 && 'jonas');

console.log('hello' && 23 && null && 'jonas');
console.log('hello' && 23 && 'jonas' && 0);

//Practicel Example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spanich');
}
//We Can Avoid If statements Block By using And && Opertors  (many timnes).
restaurant.orderPizza && restaurant.orderPizza('cake', 'debhai');
//Not recomend to replace all if statements with && bcz it will make code very hard to read.

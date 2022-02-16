'user strict';
const email = 'hello#jonas.io';
const loginEmail = '  Hello#Jonas.io';

const normalizeEmail = loginEmail.toLowerCase().trim();
console.log(normalizeEmail === email);

//Replacing
const priceGB = '288,97&';
const priceUs = priceGB.replace('&', '$').replace(',', '.');
priceUs;

//Bolleans -- Used for conditional statement
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));

console.log(plane.startsWith('Air'));
console.log(plane.startsWith('Boeing'));

// Practice Exercise
const checkBaggage = function (item) {
  const baggage = item.toLowerCase();
  let a;
  if (baggage.includes('knife') || baggage.includes('gun')) {
    a = console.log('Yor are Allowed');
  } else {
    a = console.log('Your are Not Allowed');
  }
  return a;
};
console.log(checkBaggage('I have a laptop, some Food and a Pocket Knife'));
// console.log(checkBaggage('Socks and camera'));
// // console.log(checkBaggage('Got some snacks and a gun for protection'));

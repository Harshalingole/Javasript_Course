'user strict';
//Default Parameters
const bookings = [];

const creatBooking = function (
  flightNum,
  numPassengers = 1, //ES6 way to assign Default value to parameter
  price = 199 * numPassengers
) {
  //ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  return bookings.push(booking);
};

console.log(creatBooking('LH123'));
console.log(creatBooking('LH12', 2));
console.log(creatBooking('LH123'), 2, 800);
console.log(creatBooking('LH123'));

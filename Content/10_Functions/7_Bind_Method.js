'user strict';
// ------THE BIND METHOD---------
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  booking: [],
  // book: funtion(){}
  book(flightNum, name) {
    this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
    return `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`;
  },
};

const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  booking: [],
};

const book = lufthansa.book;
//BIND METHOD
const bookEW = book.bind(eurowings);
bookEW(23, 'Steven Williams');
//Now we can use this to set to multiple airline

// We can creat Book fun -- Specific airline & FlightNum
const bookEW23 = book.bind(eurowings, 23); // This funtion will only need name

bookEW23('Jonas Schemdtman');
bookEW23('harshal ingole');
console.log(eurowings);

//With Event Listeners
// On EventListerner this keyword will point to element that is attached to
lufthansa.plane = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);

// Particial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVat = addTax.bind(null, 0.23);
console.log(addVat(100));

// Rewriting Using Funtion calling funtion
//Challenge - Creat a funtion that will return funtion that will do addVat

// const addTaxR = (rate, value) => vatVal => addTaxR.bind(null, vatVal);

// const addTaxR = (rate, value) => {
// return function addVatR(vatVal) {
// return `${addTaxR.bind(null, 0.23)}`;
// };
// };
// addTaxR(0.1, 200);
// console.log(addTaxR(0.1, 200));
// console.log(addTaxR(0.1, 200)(100));
//

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));

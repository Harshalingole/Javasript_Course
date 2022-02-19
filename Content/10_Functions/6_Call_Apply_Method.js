'user strict';
// The Call And Apply Method
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
console.log(lufthansa.book(239, 'Harshal Ingole'));
console.log(lufthansa.book(635, 'Gajanan Ingole'));
console.log(lufthansa);

const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  booking: [],
};

const book = lufthansa.book;
//Does Not Works--- Bcz Now this keyword is undefined and not pointing to lufhansa object
// book(23, 'Sarah Williams')

// To solve the above issue Call Method came
// Now this keyword will point to the first argument we pass in
//-------------CALL METHOD------------
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 324, 'Marry Copper');
console.log(lufthansa);

const swiss = {
  airline: 'Eurowings',
  iataCode: 'LX',
  booking: [],
};

book.call(swiss, 583, 'Meghan Rauts');
console.log(swiss);

//APPlY METHOD
const flightData = [583, 'Geroge Copper'];
book.apply(swiss, flightData);
console.log(swiss);

//In Modern Javascirpt we use spread opertor  instead apply
book.call(swiss, ...flightData);
console.log(swiss);

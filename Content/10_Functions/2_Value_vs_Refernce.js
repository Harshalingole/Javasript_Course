'user strict';
//How Passing Argument Works: Value Vs Refernce

// Javascript Have only Passing by Value In funciton
// And Not By Refernce
// Javascript Does NOt have Pass by Refernce
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtman',
  passport: 56435312158,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 56435312158) {
    console.log('Check In');
  } else {
    console.log('Wrong Passport!');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

//Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

'user strict';
// ------Clousuer Example-------

// Examples Wili Demonstrate we dont need return function from another function In Order To Create  Clousure

// Example 1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();

// Re - assigning f function
h();
f();
console.dir(f); //Now we No longer have the variable a from g scope instead we have now --> variable b = 777 from h scope

//Basically when we re-assign value old clousure disappear and new clousure take the place

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passenger`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
// A clousure has priority over  even scope chain
// Try it by commenting perGroup form boardPassenger
boardPassengers(180, 3);

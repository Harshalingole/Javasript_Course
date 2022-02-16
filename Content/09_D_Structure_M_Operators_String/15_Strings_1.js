'user strict';
// ------------Working With Strings-----------
const ariline = 'TAP Air Portugal';
const plane = 'A320';

// As String is primitive values theroefore they should not have any method
// But javascript is smart and it converts string into string objects behind the scene
// and then apply all the methods on its

// Srings Method
console.log(plane[0]);
console.log(plane[1]);

// length of string
console.log(ariline.length);
// Index of character form string
console.log(ariline.indexOf('r'));
console.log(ariline.indexOf('Portugal'));
console.log(ariline.lastIndexOf('r'));
// slice method -accept negative index
console.log(ariline.slice(8)); //Give new string in return
console.log(ariline.slice(4, 7));
console.log(ariline.slice(1, -1));

// Example
const checkMiddleSeat = function (seat) {
  // B and E are Middle Seats
  const s = seat.slice(-1);
  return s === 'B' || s === 'E' ? 'Yes' : 'No';
};
console.log(checkMiddleSeat('11B'));
console.log(checkMiddleSeat('23C'));
console.log(checkMiddleSeat('34E'));

// Behind the scene of sting method

console.log(typeof new String('Harshal'));
console.log(typeof new String('Harshal'));
console.log(typeof new String('Harshal').slice(1));

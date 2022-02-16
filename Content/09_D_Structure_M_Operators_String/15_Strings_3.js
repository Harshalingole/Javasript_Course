'user strict';

// Split AND JOIN
console.log('a+very+nice+sring'.split('+'));
console.log('Jonas Schemedtaman'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtman'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capatalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  return console.log(namesUpper.join(' '));
};

capatalizeName('jessica ann smith davis');

//PADDING
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('jonas'.padStart(20, '+').padEnd(30, '+'));

//Paddig Example
const maskCreditCard = function (number) {
  const num = String(number);
  const len = num.length;
  console.log(num.slice(-4).padStart(len, '*'));
  return num.slice(-4).padStart(len, '*');
};
console.log(maskCreditCard(567489765234));
console.log(maskCreditCard(89765234));
console.log(maskCreditCard('567489765234544'));

//Repeat
const message2 = 'Bad weather.... All Departures Dealyed';
console.log(message2.repeat(3));

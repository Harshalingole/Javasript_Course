'user stict';
// Funtiion Returning Funtion
const greet = function (greeting) {
  return function (name) {
    return `${greeting} ${name}`;
  };
};
const greetHey = greet('Hey');
console.log(greetHey('Jonas'));
console.log(greetHey('Steven'));

console.log(greet('Hello')('Harshal'));

//Write above funtion Using Arraow Funtion

const greetAry = greeting1 => name1 => `${greeting1} ${name1}`;

const greerHey1 = greetAry('Hey');
console.log(greerHey1('Harshal'));
console.log(greerHey1('Ingole'));

console.log(greetAry('Hey')('Harshal'));

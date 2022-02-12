'use strict';
// -----------MAPS-------------

/* 
1)Maps is Data structure that we use to map value to key.
2)In Maps key can have any type as compare to in objects key is string always.

*/
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze Italy');

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Oraganic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open ;D')
  .set(false, 'We are closed :(');
console.log(rest);

console.log(rest.get('name'));
console.log(rest.get(true));
// Data types of key is important to get out of map

const time = 11;
console.log(rest.get(time >= rest.get('open') && time < rest.get('close')));

//Method of MAPS
console.log(rest.has('categories'));
rest.delete(2);
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest.size);
console.log(rest);

// -----------Continue Learning About MAPS

const question = new Map([
  ['question', 'Best programing Lannguage'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['Correct', 3],
  [true, 'Corect Answer'],
  [false, 'Try Again!'],
]);
console.log(question);

const openingHours = {
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
};
//Convert Existing object To map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));

// Quiz App
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer  ${key}: ${value}`);
}
// const answer = Number(prompt('Your Answer'));
const answer = 3;
if (
  answer === question.get('Correct')
    ? console.log(question.get(true))
    : console.log(question.get(false))
);
console.log(question.get(question.get('Correct') === answer));

// Conver Map to Array
console.log(...question);

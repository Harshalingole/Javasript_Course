// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 5; rep++) {
  console.log(`Lifr weight for ${rep}`);
}
// Looping Arrays, Breaking and Continuing
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

const type = [];
for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i]);
  // type[i] = typeof jonas[i]
  type.push(jonas[i]);
}
type;

const age = [];
const birthyear = [1991, 2007, 1969, 2020];

for (let i = 0; i < birthyear.length; i++) {
  age.push(2037 - birthyear[i]);
}
age;

//Continue and Break
const jonas2 = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
var continues = [];
var breaks = [];
//Continue
for (let i = 0; i < jonas2.length; i++) {
  if (typeof jonas2[i] !== "string") continue;
  continues[i] = jonas2[i];
}
continues;
//Break
for (let i = 0; i < jonas2.length; i++) {
  if (typeof jonas2[i] === "number") break;
  breaks[i] = jonas2[i];
}
breaks;
//Looping Backward or Loop in loops
var exer, repetition;
for (let exercises = 1; exercises < 4; exercises++) {
  console.log(`---Starting Execise ${exercises}`);
  for (let rep = 1; rep < 3; rep++) {
    console.log(`lift weight ${rep}`);
  }
}

//While Loop

let dice = Math.ceil(Math.random() * 6);
dice;
while (dice !== 6) {
  console.log(`You Rolled ${dice}`);
  dice = Math.ceil(Math.random() * 6);
  if (dice === 6) {
    console.log("Loop is about to ende");
  }
}
cz;
c;
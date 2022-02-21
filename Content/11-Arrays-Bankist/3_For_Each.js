'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`${i} You deposited ${movement}`);
  } else {
    console.log(`${i} You Withdraw ${Math.abs(movement)}`);
  }
}

//  Continue & Break Statement Does Not work in ForEach Loop
// forEach is Higher Orderr Funtion & Required a callback funtion
console.log(`--------FOREACH------`);
movements.forEach(function (movement, i, arr) {
  // movement = arr value ; i = arry index ; arr = entire arry with index and value
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`${i} You Withdraw ${Math.abs(movement)}`);
  }
});
// what above is doing
/*
0: funtion(200)
0: funtion(450)
0: funtion(400)
0: funtion(... )
*/

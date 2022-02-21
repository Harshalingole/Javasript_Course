'use strict';
// MAP METHOD

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Using Map Method
const eurToUsdMap = movements.map(curr => curr * 1.1);

console.log(eurToUsdMap);

const eurToUsdLoop = [];
// Using For of Loop
for (const mov of movements) {
  eurToUsdLoop.push(mov * 1.1);
}
console.log(eurToUsdLoop);

// Map Method also have access to 3 parameters
// That are = current element , current index , entire array

const movementsDescriptions = movements.map(
  (mov, i, arr) =>
    `Movements ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdraw'} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescriptions);

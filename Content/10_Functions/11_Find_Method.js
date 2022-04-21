'use strict';
// THE FIND METHOD

// FILTER -- > return all elements that match condition
// FIND   -- > return first elements that match conditon
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithdrawl = movements.find(mov => mov < 0);
console.log(firstWithdrawl);

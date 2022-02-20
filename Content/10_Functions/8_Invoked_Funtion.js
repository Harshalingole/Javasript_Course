'user strict';
//----Immediate Invoked Funtion----
const runOnce = function () {
  console.log('This will  run');
};
runOnce();
//IIFE
(function () {
  console.log('THis will never run again');
  const isPrivate = 2;
})();

//IIFE --Arrow funtion
(() => console.log('This will ALSO never run again'))();

//In modern javascript we now dont use IIFE unless we declare variable var inside block scope { }

{
  const isPrivate = 23;
  var notPrivate = 44;
}
// console.log(isPrivate) //It is not defined
console.log(notPrivate);

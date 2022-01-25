//Dought line no: 75, 80

//Temporal Dead Zone

const myName = "Jonas";

if (myName === "Jonas") {
  // Cannot access 'job' before initialization
  // console.log(`jonas is a ${job}`);

  const age = 2037 - 1998;
  console.log(age);
  const job = `teacher`;

  // x is not defined
  // console.log(x);
}

//Accesing variables before initialising is bad practice and should be avoided.

//Why Hosting
//--- Using function before actual declaration.
//--- var hosting is just a byproduct.

//////HOSTING & TDZ IN PRACTICE

// Hosting With Variables
me;
// year;
var me = "harshal";
//TDZ start from the begening till variable it define.
let job = "techer";
const year = 1991;

// Hosting With Function
console.log(addDecl(2, 3));
// console.log(addExpr(2,3));

console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example -- Delete shopping cart if numproduct = 0;

console.log(numProduct); //bcz of hosting we get here undefined which is false value
if (!numProduct) console.log(deleteShoppingCart());

var numProduct = 10;
function deleteShoppingCart() {
  return "All Product Deleted";
}

console.log(numProduct);
if (!numProduct) console.log(deleteShoppingCart());

/////// BEST PRACTICES
/*
1) Dont use var use only const if you need to change variable value then only use let.

2)To write clean code you should Declare Your Variable At Top Of Each Scope.

3) Declare All Your Function First and use them after declaration this appply to all type of function even those which are hosted.

4) Never Ever Use Arrow Funtion As Method.

*/
/* As here i am able to get abc before declaring  
   it in window object but not after on line no 84  
   Can you explain why its happening*/
console.log(abc === window.abc); //Why here true
var abc = 1;
let y = 2;
const z = 3;

// console.log(x === window.x);
/* As said in the lecture i should able to get abc in window 
   object  as i declare it with Var. */
console.log(abc === window.abc);
console.log(y === window.y);
console.log(z === window.z);

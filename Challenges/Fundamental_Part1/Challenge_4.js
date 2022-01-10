/*Coding Challenge #4

Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.

Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)

2. Print a string to the console containing the bill value, the tip, and the final value
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
316.25”

Test data:
§ Data 1: Test for bill values 275, 40 and 430
*/

//Simple tip calculator.
//Test Data
// const bill = 275;
// const bill = 40;
const bill = 430;
//Code
const tip = (50 <= bill && bill <= 300 ) ? ((15 * bill)/100) : ((20 * bill)/100) ;
tip
const fianlVlaue = tip + bill;
fianlVlaue
const  str = `Bill is ${bill}, Tip is ${tip } & the final pay value is ${fianlVlaue}`;
console.log(str)

let star = "this is student is";
let x = star.indexOf("is",3)
x
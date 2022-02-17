'user strict';
/* 
Write a program that receives a list of variable names written in underscore_case 
and convert them to camelCase. 
The input will come from a textarea inserted into the DOM (see code below to 
insert the elements), and conversion will happen when the button is pressed. 
Test data (pasted to textarea, including spaces): 
underscore_case 
 first_name 
Some_Variable  
  calculate_AGE 
delayed_departure 
Should produce this output (5 separate console.log outputs): 
underscoreCase      ✅ 
firstName           ✅✅ 
someVariable        ✅✅✅ 
calculateAge        ✅✅✅✅ 
delayedDeparture    ✅✅✅✅✅ 
Hints: 
§ Remember which character defines a new line in the textarea 😉 
§ The solution only needs to work for a variable made out of 2 words, like a_b 
§ Start without worrying about the ✅. Tackle that only after you have the variable 
name conversion working 😉 
§ This challenge is difficult on purpose, so start watching the solution in case 
you're stuck. Then pause and continue! 
 
Afterwards, test with your own test data! 
 
GOOD LUCK 😀
*/
const strInput = 'under_scores';
const strInput1 = document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const camelCase = function (strInput) {
  //split string
  const [a, b] = strInput.trim().split('_');
  let str = `${a[0].toLowerCase()}${a.slice(1)}_${b[0].toUpperCase()}${b.slice(
    1
  )}`;
  return str;
};

console.log(strInput);
console.log(camelCase('underscore_case '));
console.log(camelCase('first_name'));
console.log(camelCase('Some_Variable '));
console.log(camelCase('  calculate_AGE'));
console.log(camelCase('delayed_departure'));
console.log(strInput1);
document.querySelector('button').addEventListener(click, camelCase);

/*Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"

*/
const marksMass = 78;
const marksHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

// const marksMass = 95;
// const marksHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;

let markBmi = Math.round((marksMass / (marksHeight * marksHeight)));
markBmi
let johnBmi = Math.round((johnMass / (johnHeight * johnHeight)));
johnBmi
let output;
//Part 1
if(markBmi > johnBmi) {
    output = `Mark's BMI is higher than John's!`
}else output = `John's BMI is higher than Mark's!`
output
//Part 2
if(markBmi > johnBmi) {
    output = `Mark's BMI (${markBmi}) is higher than John's (${johnBmi})!`;
}else output = `John's BMI (${johnBmi}) is higher than Mark's (${markBmi})!`;
output
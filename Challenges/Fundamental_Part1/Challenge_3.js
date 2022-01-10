/*Coding Challenge #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)
3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks 😉
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/
//Data 1
const dolphinesS1 = 97;
const dolphinesS2 = 108;
const dolphinesS3 = 89;

const koalasS1 = 88;
const koalasS2 = 91;
const koalasS3 = 110;

//Data 2
// const dolphinesS1 = 97;
// const dolphinesS2 = 112;
// const dolphinesS3 = 101;

// const koalasS1 = 109;
// const koalasS2 = 95;
// const koalasS3 = 123;

//Data 3
// const dolphinesS1 = 97;
// const dolphinesS2 = 112;
// const dolphinesS3 = 101;

// const koalasS1 = 109;
// const koalasS2 = 95;
// const koalasS3 = 10;

//Code to get Output
const dolphinesAvgS = (dolphinesS1 + dolphinesS3 + dolphinesS3 )/ 3;
dolphinesAvgS
const koalasAvgS = (koalasS1 + koalasS2 + koalasS3) / 3;
koalasAvgS

const minmumScore = 100;

if(dolphinesAvgS > koalasAvgS && dolphinesAvgS >= minmumScore ) {
    console.log("Dolphins teams is winner of this trophy")
}else if(koalasAvgS  > dolphinesAvgS && koalasAvgS >= minmumScore ){
    console.log("Koalas teams is winner of this trophy")
}else if(koalasAvgS === dolphinesAvgS && dolphinesAvgS >= minmumScore && koalasAvgS >= minmumScore) {
    console.log("Match is Draw")
}else console.log("Both does not meet a minimun score--Match Draw")

//Switch Statements

const day = "Wednesday";

if(day === "Monday") {
    console.log("plan A");
    console.log("plan & only A");
}else if (day === "Tuesday") {
    console.log("plan B");
}else if (day === "Thursday" || day === "Wednesday") {
    console.log("plan th or wd")
}else console.log("Not a valid day");
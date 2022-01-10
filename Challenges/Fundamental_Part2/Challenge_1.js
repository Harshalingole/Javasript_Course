/*Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (soone average score per team).
A team only wins if it has at least double the average score of the other team.Otherwise, no team wins!

Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
*/

const dolphinesS1 = 97;
const dolphinesS2 = 108;
const dolphinesS3 = 89;

const koalasS1 = 88;
const koalasS2 = 91;
const koalasS3 = 110;
let avgScoreKoalas,avgScoreDolphines,avgScore;
const calcAverage = (a,b,c) => avgScore =((a+b+c)/3);

// avgScoreKoalas = calcAverage(65,54,49);
avgScoreKoalas = calcAverage(23,34,27);
avgScoreKoalas
// avgScoreDolphines = calcAverage(44,23,71);
avgScoreDolphines = calcAverage(85,54,41);
avgScoreDolphines

// const checkWinner = function(avgScoreKoalas, avgScoreDolphines) {
//     if(avgScoreKoalas > avgScoreDolphines && avgScoreKoalas > (2*avgScoreDolphines)) {
//         return `Kolas win (${avgScoreKoalas} vs. ${avgScoreDolphines} )`
//     }else if(avgScoreDolphines > avgScoreKoalas && avgScoreDolphines > (2*avgScoreKoalas)) {
//         return `Dolphines win (${avgScoreDolphines} vs. ${avgScoreKoalas} )`
//     }else {
//         return `No teams win`
//     }
// }
const checkWinner = function(koalas, Dolphines) {
    if(koalas > Dolphines && koalas >= (2*Dolphines)) {
        return `Kolas win (${koalas} vs. ${Dolphines} )`
    }else if(Dolphines > koalas && Dolphines >= (2*koalas)) {
        return `Dolphines win (${Dolphines} vs. ${koalas} )`
    }else {
        return `No teams win`
    }
}

console.log(checkWinner(avgScoreKoalas,avgScoreDolphines))
console.log(checkWinner(400,200))

const year = new Array(10);
year
const year1 = []
year1
year1[0] = "harshal"
year1

let age = 10;
var result;
result
if(age >= 18 ) {
    result = "eligible";
}else  {
     result = "Not eligible";
}
console.log(result)
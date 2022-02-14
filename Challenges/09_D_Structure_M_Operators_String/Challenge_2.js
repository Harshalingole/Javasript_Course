'use strict';
// Data Structures, Modern Operators and Strings
/* 
 Coding Challenge #2 
Let's continue with our football betting app! Keep using the 'game' variable from before. 
Your tasks: 
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski") 
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember) 
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this: 
Odd of victory Bayern Munich: 1.33 
Odd of draw: 3.25 
 Odd of victory Borrussia Dortmund: 6.5 
Get the team names directly from the game object, don't hardcode them 
(except for "draw"). Hint: Note how the odds and the game objects have the 
same property names 😉 
4. Bonus: Create an object called 'scorers' which contains the names of the 
players who scored as properties, and the number of goals as the value. In this 
game, it will look like this: 
{ 
  Gnarby: 1, 
  Hummels: 1, 
  Lewandowski: 2 
} 
 
GOOD LUCK 😀 
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/* 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski") */

//My Answer
const goalerName = game.scored;
goalerName;
for (const playerName of goalerName) {
  console.log(`Goal ${goalerName.indexOf(playerName) + 1} : ${playerName}`);
}

//Sir Solution
for (const [i, playerName] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${playerName}`);
}
/* 
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember) 
*/
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
  average += odd;
  average /= odds.length;
}
console.log(average);

/*
Print the 3 odds to the console, but in a nice formatted way, exactly like this: 
Odd of victory Bayern Munich: 1.33 
Odd of draw: 3.25 
 Odd of victory Borrussia Dortmund: 6.5 
Get the team names directly from the game object, don't hardcode them 
(except for "draw").
*/
//My answer
// const { team1, x: draw, team2 } = game.odds;
// console.log(`odd of victory ${game.team1} ${team1}
// odd of draw: ${draw}
// odd of victory ${game.team2}: ${team2} `);

//Solution
// for(const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? `Victory ${game[team]}`
//   console.log(`odd of ${teamStr} ${odd}`);
// }

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`odd of ${teamStr} ${odd}`);
}

/* 
4. Bonus: Create an object called 'scorers' which contains the names of the 
players who scored as properties, and the number of goals as the value. In this 
game, it will look like this: 
{ 
  Gnarby: 1, 
  Hummels: 1, 
  Lewandowski: 2 
} 
*/

const scorers = {};

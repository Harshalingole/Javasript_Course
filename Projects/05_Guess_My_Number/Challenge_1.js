/*
JavaScript in the Browser: DOM and Events
Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK 😀
*/
//Generating Random Number or Secret Number
var randomNumber = Math.trunc((Math.random()*20) + 1);
var result,x;
var score;
document.querySelector('.check').addEventListener('click' , function() { 
   const guess = Number(document.querySelector('.guess').value);
   console.log(guess, typeof(guess));
   score = Number(document.querySelector('.score').textContent);
   //When There is No-guess
   if(!guess) {
    result =document.querySelector('.message').textContent= 'No Number';
   }
    //When Players Win the Game
    else if(guess === randomNumber) {
    result = document.querySelector('.message').textContent= 'Correct guess';
    x = score + 1;
    document.querySelector('.score').textContent= x;
    document.querySelector('.number').textContent= randomNumber; 
    //Changing body background-color when player win the game & randomNumber width
    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').style.width = '30rem';
   }
    //When Players Guess Higher No. than RandomNumber
     else if(guess > randomNumber){
       //Only run if score > 0
     if(score > 0) {
      result =document.querySelector('.message').textContent= 'To High!';
      x = score - 1;
      document.querySelector('.score').textContent= x;

      //Changing body background-color when player loose the game
      document.querySelector('body').style.backgroundColor='#222';
     }else {
      result =document.querySelector('.message').textContent= 'You Loss The Game!';
      document.querySelector('.score').textContent= 0;
     }
   }
    //When Players Guess Lower No. than RandomNumber
     else if(guess < randomNumber) {
       //Only run if score > 0
     if(score > 0) {
      result =document.querySelector('.message').textContent= 'To Low!';
      x = score - 1;
      document.querySelector('.score').textContent= x;

      //Changing body background-color when player loose the game
      document.querySelector('body').style.backgroundColor='#222';
     }
   }
})

//Reset functionality
document.querySelector('.again').addEventListener('click', function() {
  document.querySelector('.message').textContent= 'Start guessing...';
  document.querySelector('.score').textContent= 20;
  document.querySelector('.guess').value='';
  document.querySelector('.number').textContent='?';
  //reseting Css propety back to reset
  document.querySelector('body').style.backgroundColor='#222';
  document.querySelector('.number').style.width = '15rem';
  randomNumber = Math.trunc((Math.random()*20) + 1);
})
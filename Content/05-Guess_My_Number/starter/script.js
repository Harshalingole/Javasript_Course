'use strict';
/*

// 01) Selecting & Manipulating Elemnets

// console.log(document.querySelector('.message').textContent)
document.querySelector('.message').textContent= 'Correct Answer';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent= 23;
console.log(document.querySelector('.number').textContent)

document.querySelector('.score').textContent= 10;
document.querySelector('.guess').value=5;
console.log(document.querySelector('.guess').value);

*/

// 02)Handling Click Events
// document.querySelector('.guess').value=50;

var randomNumber = Math.trunc((Math.random()*20) + 1);
var rNum1 = document.querySelector('.number').textContent= randomNumber;    
var result,x;
var highScore= 0;
var score;
document.querySelector('.check').addEventListener('click' , function() { 
   const guess = Number(document.querySelector('.guess').value);
   score = Number(document.querySelector('.score').textContent);
  //  high = document.querySelector('.highscore').textContent;
   //When There is No-guess
   if(!guess) {
    result =document.querySelector('.message').textContent= 'No Number';
   }
    //When Players Win the Game
    else if(guess === randomNumber) {
    result = document.querySelector('.message').textContent= 'Correct guess';
    x = score + 1;
    document.querySelector('.score').textContent= x;
    // document.querySelector('.number').textContent= randomNumber; 
    //Changing body background-color when player win the game & randomNumber width
    document.querySelector('body').style. ='#60b347';
    document.querySelector('.number').style.width = '30rem';
    //storing current score value in Highscore
    if(x > highScore){
      highScore = x;
      document.querySelector('.highscore').textContent= highScore;
    }
    // highScore = document.querySelector('.highscore').textContent=x;
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
  //  second if for losing game if score = 0;
  // if(x <= 0) {
  //   document.querySelector('.message').textContent= 'You Loss The Game!';
  // }
  //  console.log(x);
  //  return result;
  console.log(x)
})
//Reset functionality
document.querySelector('.again').addEventListener('click', function() {
   randomNumber = Math.trunc((Math.random()*20) + 1);
   document.querySelector('.message').textContent= 'Start guessing...';
   document.querySelector('.score').textContent= 20;
   document.querySelector('.guess').value='';
   document.querySelector('.number').textContent='?';
   //reseting Css propety back to reset
   document.querySelector('body').style.backgroundColor='#222';
   document.querySelector('.number').style.width = '15rem';
 })




// 03) Implementing The Game Logic

//Created variable randumNumber







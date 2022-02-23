"use strict";
// Dought line No :
// Practice : Line No: 29 ;

//// THIS KEYWORD
///---Special varible crated --> execution context & value points owener(funtion) in which it is.

///--- Not static & depend on how it is called.

// 1) Method this = < object that is calling the method>

const jonas = {
  name: `jonas`,
  year: 1989,
  calcAge: function () {
    return 2037 - this.year; // Way better than using jonas.year
  },
};
console.log(jonas.calcAge());

// 2) Simple Function Call this = undefined ! only in strict mode

// 3) Arrow Function this = < this of surrounding fucntion(lexical this)> ! not own this ! pick up from outer function

// 4) Event listener this = < DOM element handeler it attached to>

// NOTE : this does not point to function itself, and also NOT the its variable enviornment !

// This KeyWord In Practice

console.log(this); //Window object

//Regular Function Call
const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); //Here this = undefined
};
console.log(calcAge(1991));

//Arrow Function

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this); // it look for parent scope
};

console.log(calcAgeArrow(1991));

//Method

const student = {
  name: 'harshal',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(this); // this point to student object
  },
};
console.log(student.calcAge());

const students = {
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(this.year); // this point to jonas object & .year point to year in jonas objcet
  },
};
console.log(students.calcAge());

const matilda = {
  year: 2017,
};

//Method Borrowing
matilda.calcAge = jonas.calcAge;
console.log(matilda);
console.log(matilda.calcAge()); //Now this keyword point to the matilda that is this keyword always point to the object that is calling the method.
//Threfore it not static its dynamice

const f = jonas.calcAge;
console.log(f());

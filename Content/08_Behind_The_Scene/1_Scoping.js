"use strict";

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  const abc = "year";
  function printAge(a) {
    let output = `${a} is ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      // Block Scope
      //Creating New Variable With same name as on outer scope's variable
      const firstName = "Harshal";
      let str1 = `You are millenial, ${firstName} let`;
      const str0 = `You are millenial, ${firstName} const`;
      function add(a, b) {
        return a + b;
      }
      // Reassigning outer scope's variable
      output = `New Output`;
      console.log(add(2, 3));
      //Function Scope
      var str2 = `You are millenial, ${firstName} var`;
      str0;
      str1;
      str2;
    }
    output; //its showing bcz we are not re-declaring
    str2; //Var is functonal Scope
    console.log(add(2, 3)); //We cannot acces this in strict mode;
    // str1
    // str0
  }
  age;
  // str2

  printAge(firstName);

  return `${age}, ${abc}`;
}

const firstName = "Jonas";
// calcAge(1991);
console.log(calcAge(1991));
console.log();

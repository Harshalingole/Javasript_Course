"use strict";

// 1) Never Ever Use Arrow Funtion As a Method Even true if you are not using this key word in particular.

console.log(this.name);
var name = "Ingole";
const jonas = {
  firtName: "jonas",
  name: "harshal",
  year: 1991,
  calcAge: function () {
    //this is regular method
    console.log(this);
    console.log(2037 - this.year);

    //Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   // console.log(this);
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996); //To solve this error we use self
    // };

    // Modern javasript-  Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    //this is arrow method and we should avoid it
    console.log(`Hey ${this.firstName}`); //geting global scope as arrow funtion do not own this keyword
    console.log(`Hey ${this.name}`);
  },
};
console.log(jonas.calcAge(2017));
console.log(jonas.greet());
console.log(this.firstName);

////////Argument Keyword
//Regular function
const addExpr = function (a, b) {
  //Argument Keyword only work in regular function
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8);

const addArrow1 = (a, b) => {
  //Argument keyword not work in Arrow Funtion
  console.log(arguments);
  return a + b;
};
addArrow1(2, 5);
addArrow1(2, 5, 8);

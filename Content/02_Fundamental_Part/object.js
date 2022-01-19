// Dot vs. Bracket Notation
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
  };
  console.log(jonas);
   
console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + namekey);-- not work therefore we need bracket notation.

//Chalenge 1
//"jonas has 3 freind and his best friend is called michale"
let a = (jonas.friends).length;
let b = (jonas.friends)[0];
b
let c = jonas["friends"][0]
c
const ch = `${jonas.firstName} has ${(jonas.friends).length} freind and his best friend is called ${(jonas.friends)[0]}.`
ch
a
b

//Objects Methods
 
const jonas1 = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDrivesLicencse: true,
    calcAge: function(birthYear) {
        this.age = 2037 - this.birthYear ;
        return this.age;
    },
    getSummary: function() {
        return `${this.firstName} is ${this.calcAge()}-year old teacher, and he has ${this.hasDrivesLicencse ? "a" : "no"} diving licence`
    }
  };
  console.log(jonas1.getSummary())
  console.log(jonas1.calcAge(1991));
  console.log(jonas1["calcAge"](1991));

//Challenge 2
// "Jonas is a 46-year old teacher, and he has dirver's license"

// const ch2 = `${jonas.firstName} is ${jonas1["calcAge"](this.birthYear)}`;
let licence = jonas1.hasDrivesLicencse === true ? "has" : "does not";
licence
const ch2 = `${jonas.firstName} is ${jonas1["age"]}-year old teacher, and he ${licence} diving licence`
ch2
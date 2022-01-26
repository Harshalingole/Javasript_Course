"use strict";

//Practice : Line No:

//Primitive VS Refernce(object) Data Types

//Primitive value Example
let age = 30; //Age is equal to Memory Addres(0001) Not Value 30
//Still this point age as it is pointing to (0001) memory Address which has value 30
let oldAge = age; //OldAge will point towards the Memory address of age(0001)
//Value At Certain Memory Address Not Change it is imutable
age = 31; //Now Age will point to the New Memory Address(0002) which will have value 31
// now age = 31
oldAge;
oldAge = age;
oldAge;

//Refercne Value Example

const me = {
  // me is stoed in CallStack with me as identifier , which has Memory Addres(0003) and value pointing toward object address(DE001) which is stored is Heap.
  name: "jonas", //Objects Are stored in Heap With Address(DE001) & Value {};
  age: 30,
};
const friend = me; //Now me & freind are refering to same value address which is stored in heap
friend.age = 27; //Therfore we are able to change age
friend;
me;

//Except Primitive Data Types All other is Refernce Types(Object )in javascript.

/* 
Call Stack: Where Function Are Executed. Stored= Primitive Data types.
Heap : Where Refernce Data Types(Object) Are Stored.
*/

//Premitive Vs Objcet   In Practice

//Primitive Types
let lastName = "Williams";
let oldLasName = lastName;
lastName = "Davis";
console.log(lastName, oldLasName);

//Refernce Types
const jessica = {
  firstName: "Jessica",
  lastName: "Wiliams",
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before marriage:", jessica.lastName);
console.log("After marriage:", marriedJessica.lastName);

//To Solve Above we usecase problem

//Copying Objects
const jessica2 = {
  firstName: "Jessica",
  lastName: "Wiliams",
  age: 27,
  family: ["Alice", "Bobs"],
};

const jessicaCopy = Object.assign({}, jessica2); //This will merge jessica2 with empty object and creat completly new object.
jessicaCopy.lastName = "Davis";
console.log("Before Marriage:", jessica2.lastName);
console.log("After Marriage:", jessicaCopy.lastName);
//object.assign only shallow copy or copy first level objcect which does not copy object within object.
jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");
//This happen bcz of shallow copy
console.log("Befoe Marriage:", jessica2.family);
console.log("Befoe Marriage:", jessicaCopy.family);

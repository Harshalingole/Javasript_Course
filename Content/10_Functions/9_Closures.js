// -------CLOSURES----------

/*
1) Clouser are not created Normally-- It happens automtcly we just need to identify such sitiution

1) A Clousure is NOT a tangeble Javasript Object.

2) A funtion has access to the variable environment(VE) of the exection context  in which it is created 
3) CLOSURE: Varaible  attched to the funtion, exacltly as it was at the time and place the function was created

--LESS FORMAL--
4) A Clouser makes sure that a function doesnt loose connection to variables that existed at the funtion birth place;

---BackPack Related--
5) A clousure is like a backpack that a function carries around wherever it goes. This backpack has all the variables tha present in the enviornment where the function was created.
*/

const secureBooking = function () {
  // 2)Global scope secureBooking() variables == passengerCount=0
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking(); // 1) Global Execution Context a) secureBooking() after executing (2) now we have b)booker()

booker();
/*Now booker() is EC <empty> but can access Global Scope

*/
booker();
booker();
//As booker() run three times it able to increment passengerCount value

// But How it is Possible --- As booker() is availble in global enviornment but it albes to change variable form funtional scope which is now not in call stack
//Strang is booker() have somehow acccess to variable inside securebooking() which is not active in call stack.

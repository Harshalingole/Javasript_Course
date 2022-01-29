/*Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4] */

//1)Undersatanding the problem
//- Maximum teperatures array is there.
//display as output string -- "arr[i] in i...arr[i] in i"
//2)Breaking it into sub-problems !
//str1 = `arr[0] in i days `
// str2 = ` str1.conct(str1)
// convert to string from array format

const arr1 = [17, 21, 23];
// const arr1 = [12, 5, -5, 0, 4];

// print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

const printForecast = function (arr) {
  let str = [];
  for (let i = 0; i < arr.length; i++) {
    str.push(`...${arr[i]}°C in ${i+1} days`);
  }
  str.push('...')
  return  str.join('');
}

console.log(printForecast(arr1));

const printForecast1 = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}°C in ${i+1} days...`;
  }
  return str = `...${str}`
}
console.log(printForecast1(arr1));

///Find the sum of even number using reduce
const arrayNumber = [1,2,3,4,8,5,2,1];
var  r2;
var r1 = arrayNumber.filter((a) => {  
  return a%2 === 0;
})
r1

const result = r1.reduce(function evenNum(a, b) {return a + b} )
result
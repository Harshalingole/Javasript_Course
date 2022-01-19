const age = 9;
const isOldEnough = age >= 18;
var result;

if(isOldEnough) {
     result = "Elgibile for driving licence 🚗";
}else { 
    const wait = 18 - age;
    result = `Not Elgibile wait foor more couple of  ${wait} year`;
}
result

var a = "99";

var num = Number(a);
console.log(num + 10);

var num = true; //will return the number when Number(num) is called

var a = "99 88 77"
var a = "99.33" 
var num = parseInt(a); //return the value whosesoever is the first integer
var num = parseFloat(a); //return the value whosesoever is the first float

var num2 = 100;
var num3 = Infinity; //returns false
var num = Number.isFinite(num2); //just return true or false
var num = Number.isInteger(num2);

var num4 = 5.69420;

var num = num4.toFixed(2); //return the value with 2 decimal places
var num = num4.toPrecision(4); //round-about the values\

//if the parameter is greater than the number of digits available in the then it adds the 0's.

console.log(num);
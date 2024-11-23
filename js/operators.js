//Arithmetic Operators
var a = 20;
var b = 3;

// var c = a + b;
// var c = a - b;
// var c = a * b;
// var c = a / b;
// var c = a % b;
var c = a ** b; // exponentiation operator (a to the power of b)

document.write(c);
c++;
document.write(c);
c--;
document.write(c);

//Assignment Operators
var a = 10;
var b = 5;
a += b; // equivalent to a = a + b;
// works with all types of operators
document.write(a);

//Comparison Operators
// returns true or false

var n = 10;
var m = 20;
var o = "10";

var result = n==o;
document.write(result); // true -> only the value is being get checked

var result = n == m; // equal to
document.write(result); // false

var result = n != m; // not equal to
document.write(result); // true

var result = n > m; // greater than
document.write(result); // false

var result = n < m; // less than
document.write(result); // true

var result = n >= m; // greater than or equal to
document.write(result); // false

var result = n <= m; // less than or equal to
document.write(result); // true

var result = n === m; // equal to and of the same type
document.write(result); // false 

document.write(null == undefined); // true
document.write(null === undefined); // false
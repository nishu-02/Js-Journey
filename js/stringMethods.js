var str = "C++ is a great language."
var str2 = " C is also the base langugage of C++."

var a = str.charCodeAt(3); //return the ascii code the position
var a = String.fromCharCode(65); //Dont need the input return from the ASCII code
var a = str.concat(str2); // Concatenate two strings
//it can concatenate many strings.

var a = str.split(" "); //returns the array -- it means split from that parameter
var a = str.repeat(2); //repeat the strings n of times
var a = str.slice(3); //return from that index
var a = str.slice(3,8); //till the index
var a = str.slice(); //entire string
var a = str.substr(2,5); //the second parameter is inclusive here.
var a = str.substring(2,5); //not include the last char

var num = 50;
var a = num.toString();
console.log(a + 20);

//there is valueOf just to return the string
console.log(a);


var now = new Date(); //now is the object of Date -->picks up the system time as it is the client side language
//we can use any past date or the custom date also so its time hours seocnds will be midnight 12 and 0 and 0 respectively.

var a = now.toDateString(); //To print in the readable format
var a = now.getDate();
var a = now.getMonth();
var a = now.getFullYear();
var a = now.getDay();

var a = now.getHours();
var a = now.getMinutes();
var a = now.getSeconds();
var a = now.getMilliseconds();

now.setDate(27);
var a = now.getDate(); //returns 27

now.setFullYear(2025);
var a = now.getFullYear(); //returns 2025

now.setMonth(1);
var a = now.getMonth(); //returns 1
//similarly like this we can set Hour, seconds, milliseconds by the same method.

console.log(a); 

//Practical Use

console.log(now.getDate() + "-" + now.getMonth() + "-" + now.getFullYear()); //27-1-2.2025

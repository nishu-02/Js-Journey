var a = 20;
var b = 30;

if(a>b){
    console.log("A is greater than b");
} else if( a==b ) {
    console.log("A is equal than b");
} else{
    console.log("A is less than b");
}

//Logical Operators
var x = 10;
var y = 20;
// AND Operator     
if(x > 5 && y > 10){
    console.log("Both conditions are true");
} else {
        console.log("At least one condition is false");
}
        // OR Operator
if(x > 5 || y > 10){
   console.log("At least one condition is true");
    } else {
        console.log("Both conditions are false");
}

//Ternary Operator
var age = 25;
var minor = 16;
var message1 = (minor>18) ? "Eligible to Vote" : "Stay out Kid!";
var message = (age>18) ? "Eligible to Vote" : "Stay out Kid!";
console.log(message1);
console.log(message);

//Switch Case Statement

var day = 3;

switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5: 
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default :
        console.log("Invalid Day");
}

// switch(true) // directly go inside the statement
// switch(false) // directly go outisde the statement
// we can put the conditon in the case

// Types of Boxes in JS

// alert("Do not touch that code"); //Message in the popup

var voter = 18;
var age = 23;

// alert(age >= voter ? ("Eligible " + age) : "No kid");

//Confirm Box
// var confirmBox = confirm("Are you sure you want to delete this file?");
// alert( confirmBox ? "You pressed OK" : "You pressed Cancel");

//Prompt Box
var a = prompt("What is your name?");
alert(a);


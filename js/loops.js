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

//While loop in js
var i = 0;
while(i<5){
    console.log(i);
    i++;
}

//Do while loop in js
var i = 0;
do{
    console.log(i);
    i++;
}while(i<5);

//For loop in js
for(var i = 0; i<5; i++){
    console.log(i);
}

//Even odd using loop
var num= 10;

for(var i = 0; i<10; i++){
    if(num % 2 == 0){
        console.log("Even");
    }
    else {
        console.log("Odd");
    }
}

//Nested Loop

for(var i =1; i<=5; i++){
    for(var j = 1; j<=i; j++){
        document.write(j + " ");
    }
    document.write("<hr>")
}
//Break and Continue Statements
// break is used when the condition is satisfied to break out of the loop
// continue is used when the condition is satisfied to skip the current iteration and move to the next iteration


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


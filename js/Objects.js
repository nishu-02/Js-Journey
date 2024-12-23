//Object is the advanced version of the array

var a = {
    firstName : "Arthur",
    LastName : "Morgan",
    age : 36,
    occupation : "Outlaw",
    //These are the properties of the object on the left-hand side.
}
//document.write(a); // [object Object] will be the output
console.log(a);
console.log(a.firstName); //we can print any property of the object.

var b = {
    firstName : "John",
    LastName : "Marston",
    age : 38,
    occupation : "Outlaw",
    gamesIn : ["Red Dead Redemption", "Red Dead Redemption 2"], //array inside the obejct.

}

console.log(b);
console.log(b.gamesIn); //to print the array inside the object.
console.log(b.gamesIn[1]); //to print the second element of the array inside the object.

//we can also add a function inside the object.
var human = {
    name : "John",
    age : 38,
    occupation : "Outlaw",
    //function inside the object
    sayHello : function(){
        return "Hello";
    }
}

console.log(human.sayHello()); //to call the function inside the object.

var b = {
    firstName : "John",
    lastName : "Marston",
    age : 38,
    occupation : "Outlaw",
    gamesIn : ["Red Dead Redemption", "Red Dead Redemption 2"], //array inside the obejct.
    fullName : function(){
        // return firstName + " " + lastName; //this will give an error because we have to use the object name to access the properties of the object.
        return this.firstName + " " + this.lastName;   //this will work fine; //this will work fine.
    }
}

console.log(b.fullName()); //to print the full name of the object.
//so these funciton are the methods of the object and rest are the properties of the object.

//we can also add the object inside the object.
var human = {
    name : "John",
    age : 38,
    occupation : "Outlaw",
    //object inside the object
    address : {
        city : "Blackwater",
        country : "USA",
    }
}

console.log(human.address.city); //to print the city of the address object inside the human object.
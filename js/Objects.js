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
    },
}

console.log(human.address.city); //to print the city of the address object inside the human object.

//Another way to create the object.

var human = new Object();

//way to assign the properties to the object.
human.name = "John";
human.age = 38;
human.occupation = "Outlaw";
human.address = {
    city : "Blackwater",
    country : "USA",
}

//Array of obejcts

var students = [
    {name : "John", age : 20}, //0
    {name : "Arthur", age : 22}, //1
    {name : "Dutch", age : 25}, //2
    
]

console.log(students);

for(var i = 0; i < students.length; i++){
    console.log(students[i].name + "-" + students[i].age);
}  

//const Objects
//const is used to declare the constant variable in the JavaScript. It is used to declare the variable

const humans = {
    name : "John",
    age : 38,
    occupation : "Outlaw",
}
//if you try to change the value of the constant variable, it will throw the error.
humans.name = "Arthur"; //this will throw the error.

console.log(humans);

//To prevent from writing the peoperty every time when printing in the for loop we haveans pecial loop called for( in ) loop. which is speacially used for the objects.

for (var key in humans){
    console.log(key + " : " + humans[key]);// key for the property and humans[key] for the value of the property.
    //property is also called as the key so that is why we are using the key.
}


//Map() function
//Map() function is used to create the new array from the existing array. It is used to create the new array with the new values. It is used to create the new array with the new values.

var arr = [1, 34, 5, 6, 7, 8, 9];

function multiply(value){
    return value*10;
}

var resultant = arr.map(multiply);
console.log(resultant);

var object = [
    {name : "John", age : 20},
    {name : "Arthur", age : 22},
    {name : "Dutch", age : 25},

]

function extract(value){
    return value.name + " is " + value.age + " years old";
}

var objResult = object.map(extract); //so it create the array from the existing object.
console.log(objResult); 



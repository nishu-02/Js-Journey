// -------------- Template strings ---------------- //

let user = "Nishant Garg";
let data = "CSE";
var greet = `Welcome ${user}! You are in the ${data} department I guess.`;

// ${} introduced in the ES6 version of Javascript and used to embed the strings in the template strings.
console.log(greet);

function greetUser(user, data) {
  console.log( `Welcome ${user}! You are in the ${data} department I guess.`);
}

greetUser(user, data); // Welcome Nishant Garg! You are in the CSE department I guess.

// -------------- Arrow functions ---------------- //

// Old way of writing functions
function greetUser(user, data) {
    console.log( `Welcome ${user}! You are in the ${data} department I guess.`);
}

const greetAdmin = (user) => {
    console.log(`Welcome Creator ${user}!`);
}

// if the function has only one line of code, we can remove the curly braces and return keyword.
const oneLine = (user) => console.log(`Welcome Admin ${user}!`);
const oneLine2 = user => console.log(`Welcome Admin ${user}!`);

greetAdmin("Nishant"); // Welcome Admin !

// -------------- REST operator ---------------- //

// if the function has too many parameters, we can use the REST operator to pass the parameters as an array.

// Before the ES6 version

function sumOld() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
} // It makes teh parameters as object and we can access them using the index.

// The problem is when the arguments which are not required are passed, it will still be considered.

// ... is the REST operator

function sum(name, ...args){
    console.log(name);
    let sum = 0;
    for (let i in args) {
        sum += args[i];
    }
    return sum;
}

console.log(sum("Nishant", 10, 20, 30, 40, 50)); // 150

// -------------- SPREAD operator ---------------- //

// ... is the SPREAD operator and it is used to spread the elements of an array or object.

let arr = [1, 2, 3, 4, 5];
console.log(...arr); // 1 2 3 4 5
console.log([...arr, 6, 7, 8]); // [1, 2, 3, 4, 5, 6, 7, 8] It goes being to an array bascially an copy of the first.

function multiply(name, ...arr) {
    let total = 1;
    for (let i in arr) {
        total *= arr[i];
    }
    return `${name} ${total}`;
}

console.log(multiply("Nishant", ...arr)); // Nishant 120
var arr2 = [...arr]; // It will create a copy of the array not the reference.
var arr3 = arr; // It will create a reference to the array.
var arr4 = [60, 70, 80, ...arr];
console.log(arr4);

// -------------- Object Literals ---------------- //

let name = "Nishant";
let age = 20;

let who = {
    name: name,
    age: age
};

console.log(who);

// In ES6, we can remove the key if the key and value are same.
var who2 ={
    name,
    age
};

let n = "name";

var who3 = {
    [n]: "Nishant",
    age: 20
};
console.log(who3); // We can also do the arithmetic operations in this [n + "first"] and we can also access the object content like obj.name even it was n

// short form to create the functions inside the object.

var who4 = {
    [n + "first"] : "Nishant",
    age: 20,
    detail() {
        return `Name:${this.namefirst} and of Age:$ {this.age}`
    }
}
console.log(who4.detail());
// also the fucntion can return the object itself.

// -------------- Destructuring ---------------- // 

let details = ["Arthur Morgan", "Red Dead Redemption 2", "Rockstar Games"];
// rather than accessing the array using the index, we can use the destructuring to access the elements.

// so we will crate and empty array and assign the values to the array.
let [name2, game, company] = details;
console.log(name2, game, company);

// we can also skip the elements by using the comma.
let [name3, , company2] = details;
console.log(name3, company2); 

let [origin, ...args] = details;
console.log(origin, args); // Arthur Morgan [ 'Red Dead Redemption 2', 'Rockstar Games' ]

// we can also use the destructuring in the objects. 


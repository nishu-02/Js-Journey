// Template strings

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

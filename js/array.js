//Methods to create arrays...
const array = [1, 2, 3, 4, 5];
const array2 = ["Nishant", 264, "Harsh"];
const array3 = new Array(3);
const array4 = new Array(1, "Nishant", "Garg", 9.56);
array3[0] = 64;
array3[1] = 32;
array3[2] = "Nishant";
console.log(array[1]);
var sum = 0;

for (var i = 0; i < 5; i++) {
    console.log("<li>" + array[i] + "</li>");
    sum += array[i];
}

console.log(sum);

//Multi-Dimensional Array

var array5 = [
    [//0
        1, 2, 3, 4, 5
    ],
    [//1
        6, 7, 8, 9, 10
    ],
    [//2
        11, 12, 13, 14, 15
    ]
]
//do not use the "" inside the "" use ' in the document.write
//we would use nested loof for traversing the multi-dimensional array

//array.length -> to get the length of the array

for(var a =0; a<array5.length; a++){
    for(var b = 0; b<array5[a].length; b++){
        console.log(array5[a][b]);
    }
}

//Modifying the elements of array
console.log(array[0]);
array[0]= "Nishant";
console.log(array[0]); //using the index method or directly using the index of the array

//Removing the array Element
delete array5[2][4];
//It justs empty the space of the element but does not remove it from the array
// for(var a =0; a<array5.length; a++){
    // for(var b = 0; b<array5[a].length; b++){
        // console.log(array5[a][b]);
    // }
// }

//Array Fucntion Methods

const names = ["Nishant", "Harsh", "Ayush", "Yachna", "Das", "Abbas"];
// console.log(names.indexOf("Harsh")); //returns the index of the element
console.log(names);
names.sort(); //sort the array lexographically or increasing order
console.log(names);

names.reverse();//reverses the array
console.log(names);

names.pop() //Removes the last element of the array
console.log(names);

names.push("Abbas"); //Add the element to the last of the array
console.log(names);

// names.shift(); //Removes the first element of the array
// console.log(names);

names.unshift("Yachna"); //Add the element to the first of the array
console.log(names);

//Concat the array with the another array

//Method - 1
var area = names.concat("West Delhi", "South Delhi", "Faridabad");
// console.log(area);

//Method - 2
const college = ["GTBIT", "GTB4CEC"];
var c = names.concat(area);
// console.log(c);

//Method - 3
var c = [...names, ...area, ...college] //Spread Operator
console.log(c);

var d = names.join(" "); //Join the array with the string
console.log(d);

//Slice the array
//slice(start, end) -> start is inclusive and end is exclusive
var e = names.slice(1, 3);
console.log(e);

var e = names.slice(-3); //slice the last 3 elements
console.log(e);

var e = names.slice(2); //slice the elements from 2 to end
// console.log(e);

var e = names.slice(-3,-1);
var e = names.slice() //slice the entire array

//Splice the array--> It is used to add or remove the elements from the array
//splice(start, howmany_to_delete, "new_value") 

//..>start is the index from where to start deleting the elements  
//..>howmany_to_delete is the number of elements to delete
//..>new_value is the value to be added at the start index
var numbers = [1, 2, 3, 4, 5, 6, 7];
numbers.splice(2, 2, "Nishant", "Garg");
console.log(numbers);

numbers.splice(2, 0, "Nishant", "Garg");
console.log(numbers);

//it will be same as the slice in the case for the negative indexing or the one when it start from the end

//isArray() function

//if any element is an array then it will return true otherwise false

console.log(Array.isArray(numbers));

var a = 1;
console.log(Array.isArray(a));

//indexOf() function --> it will the give the index of the element

// indexOf("element", start_index) //start_index is optional -->this means if the element is occuring after this or not.
console.log(numbers.indexOf(5));

//it return the -1 value if the value is no present in the array

//lastIndexOf() function --> it will the give the index of the element from the last
// lastIndexOf("element", start_index) -->start_index is optional -->this means if the element is occuring after this or not.   
console.log(numbers.lastIndexOf(5));

//it return the -1 value if the value is no present in the array

//includes() function --> it will return the true if the element is present in the array otherwise false
console.log(numbers.includes(5));

//it is case sensitive and it will return the false if the element is not present in the array

//some() function --> it will return the true if any of the element satisfies the condition otherwise false
console.log(numbers.some((element) => element>5));

//every() function --> it will return the true if all of the element satisfies the condition otherwise false
console.log(numbers.every((element) => element>5));

//so this some and every wants function as the parameter and define the condition in the function

//find() function --> it will return the first element which satisfies the condition\
console.log(numbers.find(greater));

//findIndex() function --> it will return the index of the first element which satisfies the condition
console.log(numbers.findIndex(greater));

function greater(element){
    return element > 4;
}

//filter() function --> it will return the array of the elements which satisfies the condition
console.log(numbers.filter(greater));

//toString() function --> it will return the string of the array
console.log(numbers.toString());

var num = [1, 2, 3, 4, 5, 6, 7];

//values() function --> it will return the values of the array
console.log(num.values());

//fill() function --> it will fill the array with the value
console.log(num.fill(0));

//forEach() function --> it will iterate over the array

var a = ["GTBIT", "GTB4CEC", "MSIT", "MAIT"];

//a.forEach(function(){
// });

a.forEach(function(value, index){
    console.log(value);
})


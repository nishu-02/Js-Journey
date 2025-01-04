var newElement = document.createElement("li");
var newText = document.createTextNode("Peach");

newElement.appendChild(newText);

var target = document.getElementById("list");
var oldElememt = target.children[0];

// console.log(oldElememt);

target.replaceChild(newElement, oldElememt);
// can replace any tag with any

var target2 = document.getElementById("list");
var oldElement2 = target2.children[1];

target.removeChild(oldElement2);

//cloneNode Method:-
var target = document.getElementById("list").children[2];
var clone = target.cloneNode(true); //only tag will be copied if it is empty (the default value is false)

console.log(clone);

document.getElementById("list2").appendChild(clone);
document.getElementById("test").appendChild(clone);
// can be clone anywhere

// isEqualNode()

// There are some criterias for it to be true
// 1. Both same nodes Type
// 2. Both same nodes Name
// 3. Both same nodes Value
// 4. same childNodes
// 5. same attributes
// 6. same attribute values

var target1 = document.getElementById("list").firstElementChild;
var target2 = document.getElementById("list2").firstElementChild;

var equal = target1.isEqualNode(target2);
console.log(equal);
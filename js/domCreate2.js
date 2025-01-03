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
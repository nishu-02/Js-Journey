// so there are 3 Methods for it.
// 1. createElement()
// 2. createTextNode()
// 3. appendChild()

// 1. createElement()
// This method is used to create a new element node with the specified name.
// Syntax:
// var element = document.createElement(tagName);

// 2. createTextNode()
// This method is used to create a new text node with the specified text.
// Syntax:
// var text = document.createTextNode(data);

// 3. appendChild()
// This method is used to add a new element node at the end of the list of child nodes.
// Syntax:
// element.appendChild(node);

// Example
// Create a new paragraph element and add it to the document.
var para = document.createElement("p");
console.log(para);

var heading = document.createElement("h1");

var newText = document.createTextNode("This is a new Text Node");
console.log(newText);

var newText2 = document.createTextNode("RDR 2");

var newComment = document.createComment("Micah is a Snitch");
console.log(newComment);
// Note: In the above example, we have created a new paragraph element and added it to the document. We have used the createElement() method to create a new paragraph element, createTextNode() method to create a new text node, and appendChild() method to add the new paragraph element to the document.

// DOM Append Methods:-

para.appendChild(newText);
document.getElementById("test").appendChild(para);
// Always add at the last

heading.appendChild(newText2);
var target = document.getElementById("test");
target.insertBefore(heading, target.childNodes[2]); // At any position based on the second parameter.
console.log(para);

// These methods only append the things which means add the pre-exisitng things but below are the methods that can create and append too.

// 1. insertAdjacentElement
var newElement= document.createElement("h2");
var newText = document.createTextNode("Text Node");
newElement.appendChild(newText);
target.insertAdjacentElement("beforebegin", newElement);

var newElement2 = "<h2>Ohoooo</h2>"
target.insertAdjacentHTML("afterend", newElement2);

var newText3 = "RDR 1";
target.insertAdjacentText("beforeend", newText3);
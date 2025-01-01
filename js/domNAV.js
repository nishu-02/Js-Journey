// var a = document.getElementById("inner").parentElement;

// var a = document.getElementById("outer").parentElement;

//var a = document.body.parentElement;

// var a = document.getElementById("inner").parentElement.style.background = "red";

// the differnence between the parenetElement and the node is that node return something is there is nothing while the Element returns the null is parent doesn't exist

/* document.getElementById("child-c").parentElement.style.background = "red";
    var a = document.getElementById("child-c").parentElement; */

    document.getElementById("child-c").parentElement.style.background = "red";
    var a = document.getElementById("main").parentNode; 
    
// Children Methods:-

var a = document.getElementById("outer").children; // Only target the Tags
var a = document.getElementById("outer").children[3]; // returns the element with id "child-c"

var a = document.getElementById("inner").children[1].style.background = "teal";

var a = document.getElementById("inner").childNodes; // returns the text as well even if it is empty space.
var a = document.getElementById("inner").childNodes[4],innerHTML;

// firstChild and lastChild:-

var a = document.getElementById("inner").firstElementChild;
// console.log(a);
var a = document.getElementById("inner").firstElementChild.style.background = "midnightblue";

var a = document.getElementById("inner").lastElementChild;
// console.log(a);
var a = document.getElementById("inner").lastElementChild.style.background = "beige";

// simply firstChild and lasstChild will return just like the childNodes so the styling is not feasible with this.

// previousSibling && nextSibling:-
var a = document.getElementById("child-c").previousSibling;
console.log(a);

var a = document.getElementById("child-c").nextSibling;
console.log(a);
//above two just like the childNodes or the firstChild/lastChild

var a = document.getElementById("child-c").nextElementSibling;
console.log(a);

var a = document.getElementById("child-c").previousElementSibling.style.background = "thistle";
console.log(a);

// if the nextElementSibling is called on the lastElement then the answer will be null

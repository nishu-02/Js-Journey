// Contain method
var parentElement = document.getElementById("test");
var target = document.getElementById("abc");

var search = parentElement.contains(target);
console.log(search); // true or false

// hasAttribute Method:-
var find = target.hasAttribute("class");
console.log(find);

//hasChildNodes() Method:-
var toBeFind = target.hasChildNodes(); // returns true or false
console.log(toBeFind); //even returs true if there is a space


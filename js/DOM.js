//DOM - Document Object Module
//Three methods to target the dom objects

//These are the main most used methods....
//1. document.getElementById(id)
//2. documnent.getElementByClassName(name)
//3. document.getElementByTagName(name)


//Basic target methods of the DOM
var element;

element = document; //returns the document object or the whole document
element = document.all; //return the array of tags in the console

//so if we want to target an object we can use
element = document.all[9]; //returns the 10th element in the tags
element = document.head; //returns the html of the head
element = document.title;
element = document.body; //returns the body of the html

element = document.links; //return the number of anchor tags
element = document.images; //returns the number of images in the document //but it is not the array it looks like one tho
element = document.forms; //returns the number of forms in the document
element = document.doctype;

element = document.URL;
element = document.domain;

element = document.getElementById("header"); //returns the element with the id of header

element = document.getElementsByClassName("list");  //as classes can be multiple so it returns a HTMLCollection
//if we wish to target another class with the same name
//we can use the getElementsByClassName method with the index number
element = document.getElementsByClassName("list")[0]; //returns the first element with the class of list

element = document.getElementsByTagName("ul"); 
//just like the className we can use indexing
element = document.getElementsByTagName("ul")[0]; //returns the first ul tag in the document

//DOM - Document Object Module
//Three methods to target the dom objects

//These are the main most used methods....
//1. document.getElementById(id)
//2. documnent.getElementByClassName(name)
//3. document.getElementByTagName(name)

//Basic target methods of the DOM
var element;

element = document; //returns the document object or the whole document

console.log(element);
element = document.all; //return the array of tags in the console

console.log(element);
//so if we want to target an object we can use
element = document.all[9]; //returns the 10th element in the tags

console.log(element);
element = document.head; //returns the html of the head

console.log(element);
element = document.title;

console.log(element);
element = document.body; //returns the body of the html

console.log(element);
element = document.links;

console.log(element); //return the number of anchor tags
element = document.images;

console.log(element); //returns the number of images in the document //but it is not the array it looks like one tho
element = document.forms;

console.log(element); //returns the number of forms in the document
element = document.doctype;

console.log(element);
element = document.URL;
console.log(element);
element = document.domain;

console.log(element);
element = document.getElementById("header"); //returns the element with the id of header

console.log(element);
element = document.getElementsByClassName("list"); 

console.log(element); //as classes can be multiple so it returns a HTMLCollection
//if we wish to target another class with the same name
//we can use the getElementsByClassName method with the index number
element = document.getElementsByClassName("list")[0]; //returns the first element with the class of list

console.log(element);
element = document.getElementsByTagName("ul"); 

console.log(element);//just like the className we can use indexing
element = document.getElementsByTagName("ul")[0]; //returns the first ul tag in the document

console.log(element);

//DOM GET METHODS:-

element = document.getElementById("content").innerText; //returns the text content of the element with the id of content

console.log(element);
element = document.getElementById("content").innerHTML; //returns the html content of the element with the id of content

console.log(element);
//we can also use the getAttribute method to get the attribute of the element
element = document.getElementById("content").getAttribute("class"); //returns the class attribute of the element with the id of content

console.log(element);
element = document.getElementById("content").getAttributeNode("class"); //return the property with name and value

console.log(element);
element = document.getElementById("conten").getAttributeNode("class").value; // return the value just like the getAttribute() so no use of this method
console.log(element);

//we can also use the getAttributeNames() method to get the attribute names of the element
element = document.getElementById("content").getAttributeNames(); //returns the array of attribute names of the element
console.log(element);

element = document.getElementById("header").attributes; //returns the array of attributes of the element with the id of header
console.log(element);

element = document.getElementById("header").attributes[3];
console.log(element);

element = document.getElementById("header").attributes[2].name;
console.log(element);


//DOM SET METHODs:-

element = document.getElementById("content").innerText = "Hello World"; //sets the text content of the element with the id of content
//this method cannot use html so we use innerHTML;
console.log(element);

element = document.getElementById("content").innerHTML = "<h2>Nishu-02</h2>"
console.log(element);

//if we wish to set the attribute of it 

element = document.getElementById("header").setAttribute("class", "header-class");
// first parameter is the class name and second is the value of the class value
console.log(element);

element = document.getElementById("header").attributes[2].value = "xyz";
console.log(element);

element = document.getElementById("header").removeAttribute("name");
console.log(element);

//The Query Selector method:-

//1. querySelector() - it targets only the first one
//2. querySelectorAll() - it targets the all

element = document.querySelector("#header").innerHTML = "<h1> Hola Amigo </h1>";

console.log(element);
element = document.querySelector("#header").getAttribute("class");
console.log(element);

element = document.querySelectorAll(".list")[2].innerHTML;
console.log(element);

// DOM CSS Styling Methods

element = document.querySelector("#header").style.border;
console.log(element);

element = document.querySelector("#header").style.color; //by this we can retrive the style of the css
console.log(element);

element = document.querySelector("#header").style.border = "1px solid black";
console.log(element);

element = document.querySelector("#header").style.color = "red";
console.log(element);

// To get the className of the element
element = document.querySelector("#header").className;
// the last class gets the highest priority if there are two classes.
console.log(element);

// To get the classList of the element
element = document.querySelector("#header").classList;
// this returns the DOMtoken or the array while the className returns the string
console.log(element);

// to add the another class with the existing class
element = document.querySelector("#header").classList.add("class-name");
// we can add multiple classes just separated by the ","
console.log(element);

//vice-a-versa we can remove the classes the too
element = document.querySelector("#header").classList.remove("class-name");
console.log(element);






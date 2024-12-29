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


//DOM GET METHODS:-

element = document.getElementById("content").innerText; //returns the text content of the element with the id of content
element = document.getElementById("content").innerHTML; //returns the html content of the element with the id of content

//we can also use the getAttribute method to get the attribute of the element
element = document.getElementById("content").getAttribute("class"); //returns the class attribute of the element with the id of content

element = document.getElementById("content").getAttributeNode("class"); //return the property with name and value
element = document.getElementById("conten").getAttributeNode("class").value; // return the value just like the getAttribute() so no use of this method
//we can also use the getAttributeNames() method to get the attribute names of the element
element = document.getElementById("content").getAttributeNames(); //returns the array of attribute names of the element

element = document.getElementById("header").attributes; //returns the array of attributes of the element with the id of header
element = document.getElementById("header").attributes[3];
element = document.getElementById("header").attributes[2].name;


//DOM SET METHODs:-

element = document.getElementById("content").innerText = "Hello World"; //sets the text content of the element with the id of content
//this method cannot use html so we use innerHTML;

element = document.getElementById("content").innerHTML = "<h2>Nishu-02</h2>"

//if we wish to set the attribute of it 

element = document.getElementById("header").setAttribute("class", "header-class");
// first parameter is the class name and second is the value of the class value

element = document.getElementById("header").attributes[2].value = "xyz";

element = document.getElementById("header").removeAttribute("name");

//The Query Selector method:-

//1. querySelector() - it targets only the first one
//2. querySelectorAll() - it targets the all

element = document.querySelector("#header").innerHTML = "<h1> Hola Amigo </h1>";
element = document.querySelector("#header").getAttribute("class");

element = document.querySelectorAll(".list")[2].innerHTML;

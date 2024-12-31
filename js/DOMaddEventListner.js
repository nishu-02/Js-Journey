//HTML Event Attributes:

// Assign events using the HTML DOM

// Assign the abc function to the onclick event of the header element
document.getElementById("header").onclick = abc;
document.getElementById("content").onmouseenter = abc2;

function abc2() {
    document.getElementById("content").style.background = "beige";
}

function abc() {
    // alert("hello world");
    document.getElementById("header").style.background = "pink";
}


// addEventListener() Method:-
// it has three parameters and note dont write on in prefixes...

// 1. event name
// 2. function to be called
// 3. useCapture (optional) - default is false


// By this method we can add multiple events to the single element only the addEventListener methods allows this to add mutliple events.

document.getElementById("header").addEventListener("click",abc);
document.getElementById("content").addEventListener("mouseenter",abc3);

function abc3() {
    document.getElementById("content").style.border = "5px solid midnightblue";
}

// document.getElementById("content").addEventListener("mouseleave", function() {
//     document.getElementById("content").style.color = "pink";
// });

// More optimised way
document.getElementById("content").addEventListener("mouseleave", function() {
    this.getElementById("content").style.color = "pink";
});

//UseCapture:-
// This is optional parameter and default is false
// when this is true the events of outer div runs first and then the inner event and vice-a-versa.

//removeEventListener() Method:-



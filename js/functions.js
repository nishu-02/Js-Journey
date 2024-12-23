//Camel Casing

function hello() { //function keyword use krna h
    console.log("Hello, World!");
    // document.write("Hola Amigo!")
}
console.log(hello());

//Functions with parameters
var a = 10;
var b = 20;

function sum (x,y){
    var ans = x + y;
    // document.write(ans+ "<br>");
    console.log(ans);
    
}
sum(10,59);

function name(first_name, last_name){
    var full_name = first_name + " " + last_name;
    console.log(full_name); 
}
name("ECE", "2027");
//if one parameter is missing then it will be undefined (printed)


//Functions with return type -- when the value is to be used somewhere else
function add(a,b){
    //statements
    //return value
    return (a+b);
    // alert("Sayonara");
}

var return_value = add(4,5);
console.log(return_value);
// console.log(add(4,5));

//Events in javascript..
// 1. onclick   
// 2. onmouseover
// 3. onmouseout
// 4. onkeydown
// 5. onkeyup
// 6. onkeypress
// 7. onload
// 8. onunload
// 9. onscroll
// 10. onresize
// 11. onfocus
// 12. onblur
// 13. onchange
// 14. onselect
// 15. onsubmit
// 16. onreset
// 17. onmousedown
// 18. onmouseup
// 19. onmousemove
// 20. onmouseout
// 21. onmouseover
// 22. ondblclick
// 23. oncontextmenu
// 24. ondragstart
// 25. ondragend
// 26. ondragenter
// 27. ondragleave
// 28. ondragover
// 29. ondrop
// 30. ondrag
// 31. ondragend
// 32. ondragenter
// 33. ondragleave
// 34. ondragover
// 35. ondragstart
// 36. ondrop

//Event Listener
// 1. addEventListener()
// 2. removeEventListener()
// 3. dispatchEvent()
// 4. captureEvent()
// 5. stopPropagation()
// 6. preventDefault()
// 7. stopImmediatePropagation()
// 8. currentTarget
// 9. target
// 10. eventPhase
// 11. bubbles
// 12. cancelable
// 13. defaultPrevented









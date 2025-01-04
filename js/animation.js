// setInterval(functionName,millisecond) 1000ms = 1second
var a = 0;
var b = 0;
var id = setInterval(Anim, 1000);

function Anim() {
    a = a + 20;
    b = b + 20;
    if(a == 200){
        clearInterval(id);       
    } else {
        var target = document.getElementById("test");
        target.style.marginLeft = a + 'px';
        // target.style.width = b + 'px';
    }
    // console.log(a);
}

// One Time Animation:-
// setTimeout(functionName, millisecond)

var test = setTimeout(Ani, 5000);
// this means will after 3 seconds but only for 1 time.


/*var test = setTimeout(function() {
    var target = document.getElementById("test");
    target.style.width = "500px";
    target.style.height= "400px";
}, 5000);*/

function Ani() {
    var target = document.getElementById("test");
    target.style.width = "500px";
    target.style.height= "400px";
    // console.log("test");
}

function stopAnimation() {
    clearTimeout(test); //clearTimeout(test) is used to stop the animation
}

// we can use these events with the event listerner to make a good animation by the input.
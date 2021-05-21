var btn1 = document.getElementById("btn-1");
// btn1.addEventListener('click' , function(){
//     alert("Button 1 clicked by event listener!");
// });

btn1.addEventListener('mouseover',function(){
    console.log("Mouseover");
});

btn1.addEventListener('mousedown',function(){
    console.log("Mousedown");
})

btn1.addEventListener('mouseup',function(){
    console.log("Mouseup");
});

btn1.addEventListener('mouseout',function(){
    console.log("Mouseout");
});

// Does not detect arrow keys, shift, alt
// document.addEventListener('keypress',function(event){
//     console.log(event.keyCode);
// });

document.addEventListener('keydown',function(event){
    console.log(event.keyCode);
});

document.addEventListener('keyup',function(event){
    console.log(event.keyCode + " UP");
});


// Below is code for event propagation
var outer = document.getElementById('outer');
var inner1 = document.getElementById('inner1');
var inner2 = document.getElementById('inner2');

outer.addEventListener('click' , function(){
    console.log("Outer clicked");
});

inner1.addEventListener('click' , function(event){
    console.log("Inner 1 clicked");
    event.stopPropagation(); // to stop further event propagation
});

inner2.addEventListener('click' , function(){
    console.log("Inner 2 clicked");
});

document.addEventListener('click' , function(){
    console.log("Document clicked");
});

var btn2 = document.querySelector('#btn-2');

btn2.addEventListener('click' , function(e){
    // location.assign('https://www.w3schools.com');
    console.log(e.target);
});
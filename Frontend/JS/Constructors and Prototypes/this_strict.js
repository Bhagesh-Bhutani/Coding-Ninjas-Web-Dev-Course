"use strict";

var obj = {
    print: {
        printer: function(){
            console.log(this);
        } ,
        val: 2
    } ,
    val: 1
};

obj.print.printer();

var fxn = function(){
    console.log(this);
};

fxn();

console.log(this);
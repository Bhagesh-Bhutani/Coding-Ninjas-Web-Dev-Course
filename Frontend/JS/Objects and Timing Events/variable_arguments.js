function demo(...args){
    console.log(args);
}

function demo2(){
    for(var i in arguments){
        console.log(arguments[i]);
    }
}

demo(1,2,3,4,5,6,7);
demo2(10,11,1,2);
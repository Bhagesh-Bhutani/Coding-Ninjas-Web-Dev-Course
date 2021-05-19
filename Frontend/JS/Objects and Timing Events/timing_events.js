function counter(){
    console.log(sec);
    sec++;
    if(sec == 4){
        clearInterval(id);
    }
}

let sec = 1;
let id = setInterval(counter);
// let id2 = setTimeout(function(){
//     console.log("Time out");
// }, 5000);

// console.log(id2);
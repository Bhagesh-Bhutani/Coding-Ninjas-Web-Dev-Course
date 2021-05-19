// function expression
var fact = function factorial(n){
    if(n == 0){
        return 1;
    }
    return n * factorial(n-1);
};

// arrays

var arr1 = [1,2,,3,4];
console.log(arr1);
var arr2 = new Array(10);
console.log(arr2 + " " + arr2.length);
var arr3 = new Array();
console.log(arr3);

var arr4 = new Array(4,5,6,7);
arr4.push(10);
console.log(arr4);
console.log(arr4.pop());
arr4.unshift(2);
console.log(arr4);

// splice
console.log(arr4.splice(1,2,10));
console.log(arr4);

// Iterating an array
// forEach()

arr4.forEach(function(ele){
    console.log(ele);
});

// for loop
for(var i=0;i<arr4.length;i++){
    console.log(arr4[i]);
}
// types

console.log(typeof null);
console.log(typeof undefined);
console.log(typeof function f(){});


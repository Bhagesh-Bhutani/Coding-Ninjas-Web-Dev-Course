// function Person(age){
//     this.age = age
//     this.print = function() {
//         console.log(this);
//     };
// }

// var p = new Person(18);
// var fxn = p.print;
// fxn();

var obj = {
    name: "bhagesh",
    print: function() {
        console.log(this);
    }
};
obj.print();
var fxn = obj.print;
fxn();
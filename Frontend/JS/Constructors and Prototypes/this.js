// var obj = {
//     prop1: 1,
//     print: function(){
//         console.log(this);
//     }
// };

// var fxn = obj.print;
// fxn();
// obj.print();

var obj = {
    prop1: 1,
    print: () => {
        return () => {
            console.log(this);
        }
    }
};

var fxn = obj.print();
fxn();
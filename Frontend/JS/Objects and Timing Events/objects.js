var obj = new Object({
    firstName: "John",
    lastName: "Doe"
});

console.log(obj);

var student = {
    "name": "Joe",
    cls: 9,
    roll_no: 1
};

for(var prop in student){
    console.log(student[prop]);
}

// var keySet = Object.keys(student);
var keySet = Object.getOwnPropertyNames(student);
console.log(keySet);

// console.log(student["name"]);

// delete student["cls"];

// console.log(student);

// delete student.name;

// console.log(student.roll_no);
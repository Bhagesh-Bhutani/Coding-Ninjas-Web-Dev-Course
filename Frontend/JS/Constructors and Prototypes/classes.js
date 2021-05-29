class Person{
    constructor(){
        this.name = "Hello";
        return function(){
            return "U got me";
        }
    }
}
var p1 = new Person();
console.log(p1);

var Vehicle = class{
    constructor(name){
        this.name = name;
    }

    get getName(){
        return this.name;
    }

    set setName(name){
        this.name = name;
    }
}

var car = new Vehicle("maruti");
console.log(car.getName);
// set
car.setName = "suzuki";
console.log(car);
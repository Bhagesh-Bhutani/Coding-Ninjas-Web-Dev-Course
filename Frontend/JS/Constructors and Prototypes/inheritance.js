class Vehicle{
    constructor(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }
}

class Car extends Vehicle{
    constructor(name){
        super(name);
        this.doors = 4;
    }
}

class hey extends Car{
    constructor(name){
        super(name);
    }
}

var v = new Car("Honda");
console.log(Car.prototype);
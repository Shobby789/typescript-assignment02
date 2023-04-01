"use strict";
// Vehicle class, representing any kind of vehicle that can be rented
class Vehicle {
    constructor(make, model, year, dailyRate) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.dailyRate = dailyRate;
        this.rented = false;
    }
    getMake() {
        return this.make;
    }
    getModel() {
        return this.model;
    }
    getYear() {
        return this.year;
    }
    isRented() {
        return this.rented;
    }
    getDailyRate() {
        return this.dailyRate;
    }
    // Mark the vehicle as rented
    rent() {
        if (this.rented) {
            return `${this.make} ${this.model} is already rented.`;
        }
        else {
            this.rented = true;
            return `${this.make} ${this.model} has been rented`;
        }
    }
    return() {
        if (this.rented) {
            this.rented = false;
            return `${this.make} ${this.model} has been returned.`;
        }
        else {
            return `${this.make} ${this.model} was not rented.`;
        }
    }
}
// Car class, representing a car that can be rented
class Car extends Vehicle {
    constructor(make, model, year, dailyRate, numSeats, numDoors) {
        super(make, model, year, dailyRate);
        this.numSeats = numSeats;
        this.numDoors = numDoors;
    }
    getNumSeats() {
        return this.numSeats;
    }
    getNumDoors() {
        return this.numDoors;
    }
}
// Truck class, representing a truck that can be rented
class Truck extends Vehicle {
    constructor(make, model, year, dailyRate, loadWeight) {
        super(make, model, year, dailyRate);
        this.loadWeight = loadWeight;
    }
    getLoadWeight() {
        return this.loadWeight;
    }
}
class MotorCycle extends Vehicle {
    constructor(make, model, year, dailyRate) {
        super(make, model, year, dailyRate);
    }
}
const car = new Car("Suzuki", "Cultus", 2021, 40, 4, 4);
console.log(car.rent());
console.log(car.return());
const truck = new Truck("GMC Canyan", "GMC", 2020, 100, 4000);
console.log(truck.rent());
console.log(truck.return());
const bike = new MotorCycle("Yamaha", "R1", 2017, 30);
console.log(bike.rent());
console.log(bike.return());
//# sourceMappingURL=app.js.map
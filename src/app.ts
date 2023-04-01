// Vehicle class, representing any kind of vehicle that can be rented
abstract class Vehicle {
  make: string;
  model: string;
  year: number;
  dailyRate: number;
  rented: boolean;

  constructor(make: string, model: string, year: number, dailyRate: number) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.dailyRate = dailyRate;
    this.rented = false;
  }

  getMake(): string {
    return this.make;
  }

  getModel(): string {
    return this.model;
  }

  getYear(): number {
    return this.year;
  }

  isRented(): boolean {
    return this.rented;
  }

  getDailyRate(): number {
    return this.dailyRate;
  }

  rent(): string {
    if (this.rented) {
      return `${this.make} ${this.model} is already rented.`;
    } else {
      this.rented = true;
      return `${this.make} ${this.model} has been rented`;
    }
  }

  return(): string {
    if (this.rented) {
      this.rented = false;
      return `${this.make} ${this.model} has been returned.`;
    } else {
      return `${this.make} ${this.model} was not rented.`;
    }
  }
}

// Car class
class Car extends Vehicle {
  numSeats: number;
  numDoors: number;

  constructor(
    make: string,
    model: string,
    year: number,
    dailyRate: number,
    numSeats: number,
    numDoors: number
  ) {
    super(make, model, year, dailyRate);
    this.numSeats = numSeats;
    this.numDoors = numDoors;
  }

  getNumSeats(): number {
    return this.numSeats;
  }

  getNumDoors(): number {
    return this.numDoors;
  }
}

// Truck class
class Truck extends Vehicle {
  private loadWeight: number;

  constructor(
    make: string,
    model: string,
    year: number,
    dailyRate: number,
    loadWeight: number
  ) {
    super(make, model, year, dailyRate);
    this.loadWeight = loadWeight;
  }

  getLoadWeight(): number {
    return this.loadWeight;
  }
}

// MotorCycle class
class MotorCycle extends Vehicle {
  constructor(make: string, model: string, year: number, dailyRate: number) {
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

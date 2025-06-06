"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isCar(vehicle) {
    return "type" in vehicle && vehicle.type === "car";
}
// Usage
function makeCar() {
    return {
        make: "Toyota",
        model: "Camry",
        year: 2021,
        type: "car",
        doors: 4,
    };
}
let myCar = makeCar();
// console.log(myCar.doors); // Error: Property 'doors' does not exist on type 'Vehicle | Motorcycle | Car'
if (isCar(myCar)) { // Check if `myCar` is of type `Car`
    console.log(myCar.doors);
}

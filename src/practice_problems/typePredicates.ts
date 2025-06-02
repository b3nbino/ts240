export {};

type Vehicle = { make: string; model: string; year: number };
type Motorcycle = Vehicle & { type: "motorcycle" };
type Car = Vehicle & { type: "car"; doors: number };

function isCar(vehicle: Vehicle | Car | Motorcycle): vehicle is Car {
  return "type" in vehicle && vehicle.type === "car";
}

// Usage
function makeCar(): Vehicle | Motorcycle | Car {
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

if (isCar(myCar)) {       // Check if `myCar` is of type `Car`
  console.log(myCar.doors);
}
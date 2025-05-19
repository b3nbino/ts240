interface Device {
  manufacturer: string;
  model: string;
  year: number;
}

let computer: Device = {
  manufacturer: "Lenovo",
  model: "TUF A15",
  year: 2021
}

let smartphone = {
  manufacturer: "Apple",
  model: "12",
  year: 2017,
  number: 1112223333
}

let anotherSmartphone: Device = smartphone;
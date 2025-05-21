export {};

interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
}

let Ben: Employee = {
  name: "Benjamin Stevens",
  age: 22,
  employeeId: 31044855
} 
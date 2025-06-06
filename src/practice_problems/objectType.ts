export {};

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]; // Error: No index signature with a parameter of type 'string' was found on type '{}'
}

const obj = {
  name: "John",
  age: 30,
};

const x = getProperty(obj, "name");
const y = getProperty(obj, "age");
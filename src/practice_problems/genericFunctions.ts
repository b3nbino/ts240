function pair<T>(foo: T, bar: T): T[] {
  return [foo, bar];
}

const pairOfNumbers = pair(1, 2); // returns [1, 2]
const pairOfStrings = pair("hello", "world"); // returns ["hello", "world"]
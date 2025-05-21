export {};

interface KeyValuePair<Key, Value> {
  key: Key;
  value: Value;
}

let foo: KeyValuePair<string, number> = {
  key: "bar",
  value: 42
}
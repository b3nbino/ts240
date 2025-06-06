"use strict";
function processData(data) {
    if (typeof data === "string") {
        console.log("Hello" + data);
    }
    else if (typeof data === "number") {
        console.log("Age: " + data);
    }
    throw new Error("Invalid data");
}
// Usage
console.log(processData("Alice")); // Should print: "Hello, Alice"
console.log(processData(25)); // Should print: "Age: 25"
console.log(processData(true)); // Should throw an error: "Invalid data"

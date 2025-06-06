"use strict";
function processInput(input) {
    if (typeof input === "string") {
        return input.toUpperCase();
    }
    else if (typeof input === "number") {
        return input.toFixed(2);
    }
    else if (Array.isArray(input)) {
        return input.length;
    }
}
processInput("hello"); // Outputs: HELLO
processInput(42); // Outputs: 42.00
processInput([1, 2, 3]); // Outputs: 3

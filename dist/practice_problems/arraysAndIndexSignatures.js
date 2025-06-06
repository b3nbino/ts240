"use strict";
const customArray = ["apple", 42, "banana"];
function processCustomArray(arr) {
    if (Array.isArray(arr)) {
        return arr.filter(elem => typeof elem === "string").map(str => str.toLowerCase());
    }
    return [];
}

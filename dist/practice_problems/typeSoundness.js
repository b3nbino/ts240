"use strict";
function isNumber(foo) {
    return typeof foo === "number";
}
function safeGet(arr, index) {
    if (index >= 0 && index < arr.length) {
        return arr[index];
    }
    return undefined;
}

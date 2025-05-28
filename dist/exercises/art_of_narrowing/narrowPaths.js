"use strict";
function printLength(foo) {
    if (typeof foo === "string") {
        console.log(`String length: ${foo.length}.`);
    }
    else {
        console.log(`Array element count: ${foo.length}`);
    }
}

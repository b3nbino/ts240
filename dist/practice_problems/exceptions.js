"use strict";
function sqrt(x) {
    if (x < 0) {
        throw new Error("Cannot calculate square root of a negative number");
    }
    return Math.sqrt(x);
}
function safeSqrt(x) {
    try {
        return sqrt(x);
    }
    catch (e) {
        if (e instanceof Error) {
            return -1;
        }
        else {
            throw e;
        }
    }
}

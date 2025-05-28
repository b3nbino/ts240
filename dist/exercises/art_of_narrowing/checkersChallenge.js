"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getArea(shape) {
    if (shape.kind === "circle") {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    else if (shape.kind === "square") {
        return Math.pow(shape.sideLength, 2);
    }
    else {
        return assertNever(shape);
    }
}
function assertNever(arg) {
    throw new Error(`Error: Not all types accounted for: ${arg}`);
}

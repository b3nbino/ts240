"use strict";
function getArea(shape) {
    if (shape.kind === "square") {
        return Math.pow(shape.sideLength, 2);
    }
    else {
        return (Math.pow(shape.radius, 2)) * Math.PI;
    }
}

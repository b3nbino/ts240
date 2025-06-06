"use strict";
function describeAnimal(animal) {
    if (animal.type === "dog") {
        return `${animal.name} is a ${animal.age} years old dog.`;
    }
    else if (animal.type === "bird") {
        return `${animal.name} is a bird with a wingpsan of ${animal.wingspan} cm.`;
    }
    throw new Error("This is an unknown animal.");
}

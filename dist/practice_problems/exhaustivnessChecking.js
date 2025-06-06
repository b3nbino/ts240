"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function describeAnimal(animal) {
    switch (animal.kind) {
        case "elephant":
            return `An elephant weighs rougly ${animal.weight} lbs.`;
        case "tiger":
            return `Tigers can run around ${animal.speed} miles per hour.`;
        case "peacock":
            return `Peacock feather measure ${animal.featherLength}" on average.`;
        default:
            let _exhaustivnessCheck = animal;
            throw new Error("Unknown animal kind input");
    }
}

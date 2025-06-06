"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        return "Generic animal sound";
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    fetch() {
        return `${this.name} fetches a stick.`;
    }
}
const myDog = new Dog("Rex");
console.log(myDog.fetch());

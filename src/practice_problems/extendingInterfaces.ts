export {};

interface Animal {
  name: string;
  makeSound(): string;
}

interface Dog extends Animal {
  fetch(): string;
}

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): string {
    return "Generic animal sound";
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  fetch(): string {
    return `${this.name} fetches a stick.`;
  }
}

const myDog: Dog = new Dog("Rex");
console.log(myDog.fetch());
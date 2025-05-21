interface Dog {
  bark(): void;
}

interface Cat {
  meow(): void;
}

type Pet = Cat & Dog;

let pet: Pet = {
  bark() {
    console.log("Woof!");
  },

  meow() {
    console.log("Meow...");
  }
}
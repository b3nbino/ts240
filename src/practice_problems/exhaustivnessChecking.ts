export {};

type Elephant = {
  kind: "elephant";
  weight: number;
};

type Tiger = {
  kind: "tiger";
  speed: number;
};

type Peacock = {
  kind: "peacock";
  featherLength: number;
};

type Giraffe = {
  kind: "giraffe",
  neckLength: number,
}

type Animal = Elephant | Tiger | Peacock | Giraffe;

function describeAnimal(animal: Animal): string {
  switch(animal.kind) { 
    case "elephant":
      return `An elephant weighs rougly ${animal.weight} lbs.`;
    case "tiger":  
      return `Tigers can run around ${animal.speed} miles per hour.`;
    case "peacock":
      return `Peacock feather measure ${animal.featherLength}" on average.`;
    default:
      let _exhaustivnessCheck: never = animal;
      throw new Error("Unknown animal kind input");
  }
}
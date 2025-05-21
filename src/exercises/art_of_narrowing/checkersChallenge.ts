export {}

type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  sideLength: number;
};

type Shape = Circle | Square;

function getArea(shape: Shape): number {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else if(shape.kind === "square") {
    return shape.sideLength ** 2;
  } else {
    return assertNever(shape);
  }
}

function assertNever(arg: never): never {
  throw new Error(`Error: Not all types accounted for: ${arg}`);
}
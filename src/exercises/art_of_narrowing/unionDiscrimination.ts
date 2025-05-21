type Circle = {
  kind: "circle";
  radius: number;
}

type Square = {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape): number {
  if(shape.kind === "square") {
    return shape.sideLength ** 2;
  } else {
    return (shape.radius ** 2) * Math.PI;
  }
}
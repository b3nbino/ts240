interface Movable {
  speed: number;
  move(): void;
}

class Car implements Movable {
  speed: number;

  constructor(speed: number) {
    this.speed = speed;
  }

  move(): void {
    console.log("Vroom vroom!");
  }
}
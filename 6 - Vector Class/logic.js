class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  speak(name) {
    console.log(`Hi ${name}. The x coordinate of the vector is ${this.x}, and the y coordinate is ${this.y}.`);
  }
  plus(additionVec) {
    return new Vec(this.x + additionVec.x, this.y + additionVec.y);
  }
  minus(subtractionVec) {
    return new Vec(this.x - subtractionVec.x, this.y - subtractionVec.y);
  }
  get length () {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5
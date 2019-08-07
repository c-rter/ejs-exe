class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  speak(name) {
    console.log(`Hi ${name}. The x coordinate of the vector is ${this.x}, and the y coordinate is ${this.y}.`);
  }
  plus(additionVec) {
    return `Vec{x: ${this.x + additionVec.x}, y: ${this.y + additionVec.y}}`;
  }
  minus(subtractionVec) {
    return `Vec{x: ${this.x - subtractionVec.x}, y: ${this.y - subtractionVec.y}}`;
  }
  length() {
    let var1 = Math.sqrt((Math.pow(this.x, 2) + Math.pow(this.y, 2)));
    return var1;
  }
}

// let vecTest = new Vec(1, 2);
// console.log(vecTest.x);
// console.log(vecTest.y);
// console.log(vecTest.speak("c-rter"));
// console.log(vecTest.plus(new Vec(5, 10)));

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5
console.log(Math.sqrt(16));
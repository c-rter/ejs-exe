// function that uses a loop

function every(array, test) {
  for (item of array) {
    if (!(test(item))) {
      return false;
    }
  }
  return true;
}

// function that uses 'some' method

function every2(array, test) {
  if (array.some(n => !test(n))) {
    return false;
  }
  return true;
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

console.log(every2([1, 3, 5], n => n < 10));
// → true
console.log(every2([2, 4, 16], n => n < 10));
// → false
console.log(every2([], n => n < 10));
// → true
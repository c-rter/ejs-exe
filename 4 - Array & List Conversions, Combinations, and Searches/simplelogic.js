let arrayToList = (inputArray) => {
  let returnArray = null;
  inputArray.reverse();
  for (let num of inputArray) {
    returnArray = {value: num, rest: returnArray};
  }
  return returnArray;
}

let listToArray = (inputList) => {
 	let rArray = [];
  	do { 
      rArray.push(inputList.value);
      inputList = inputList.rest;
    }
  	while (inputList.rest != null);
  rArray.push(inputList.value);
  return rArray;
}

let prepend = (v, l) => {
  
  return {value: v, rest: l};
  
}

let nth = (l, m) => {

	for (i = 0; i < m; i++) {
  		l = l.rest;
    }

  return l.value;
  
}



console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20

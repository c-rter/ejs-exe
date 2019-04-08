const reverse1 = () => {
  let arrayRaw = document.getElementById("textArray").value;
  console.log(arrayRaw);
  console.log(typeof(arrayRaw));
  parsedArray = JSON.parse(arrayRaw);
  console.log(parsedArray);


}

const reverse2 = () => {
  currentArray = createRange(startInt, endInt, stepInt);
}

// let stepInt = document.getElementById("stepInt").value;
// document.getElementById("range").innerHTML = currentArray;


const reverse1 = () => {
  let arrayRaw = document.getElementById("textArray").value;
  console.log(arrayRaw);
  console.log(typeof(arrayRaw));
  parsedArray = JSON.parse(arrayRaw);
  console.log(parsedArray);
  reversedArray = [];
  for (i=0; i<parsedArray.length; i++) {
      reversedArray.unshift(parsedArray[i]);
  }
  document.getElementById("arrayRenderSpot").innerHTML = reversedArray;

}

const reverse2 = () => {
  currentArray = createRange(startInt, endInt, stepInt);
}

// let stepInt = document.getElementById("stepInt").value;
// document.getElementById("range").innerHTML = currentArray;


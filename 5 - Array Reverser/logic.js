const reverse1 = () => {
  let arrayRaw = document.getElementById("textArray").value;
  let parsedArray = JSON.parse(arrayRaw);
  console.log(parsedArray);

  reversedArray = [];
  for (i = 0; i < parsedArray.length; i++) {
    reversedArray.unshift(parsedArray[i]);
  }
  document.getElementById("arrayRenderSpot").innerHTML = reversedArray;

}

const reverse2 = () => {
  let arrayRaw2 = document.getElementById("textArray").value;
  let parsedArray2 = JSON.parse(arrayRaw2);
  console.log(parsedArray2);

  for (i = 0; i < parsedArray2.length; i++) {
    let tmp;

    parsedArray2[i] = tmp;
    parsedArray2[i] = parsedArray2[parsedArray2.length - i];
    parsedArray2[parsedArray2.length - i] = tmp;

  }
  console.log(parsedArray2);

}

const clearArraySpot = () => {
  document.getElementById("arrayRenderSpot").innerHTML = "";
}

// let stepInt = document.getElementById("stepInt").value;
// document.getElementById("range").innerHTML = currentArray;


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
  
  for (i = 0; i < (parsedArray2.length/2); i++) {
    let tmp = parsedArray2[i];
    parsedArray2[i] = parsedArray2[((parsedArray2.length - i) - 1)];
    parsedArray2[parsedArray2.length - i - 1] = tmp;
  }
  document.getElementById("arrayRenderSpot").innerHTML = parsedArray2;
}

const clearArraySpot = () => {
  document.getElementById("arrayRenderSpot").innerHTML = "";
}

// let stepInt = document.getElementById("stepInt").value;
// document.getElementById("range").innerHTML = currentArray;


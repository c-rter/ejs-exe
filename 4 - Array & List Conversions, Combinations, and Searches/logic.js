const reverse1 = () => {
  let arrayRaw = document.getElementById("textArray").value;
  let parsedArray = JSON.parse(arrayRaw);

  document.getElementById("arrayRenderSpot").innerHTML = reversedArray;

}

const reverse2 = () => {
  let arrayRaw2 = document.getElementById("textArray").value;
  let parsedArray2 = JSON.parse(arrayRaw2);

  document.getElementById("arrayRenderSpot").innerHTML = parsedArray2;
}

const clearArraySpot = () => {
  document.getElementById("arrayRenderSpot").innerHTML = "";
}

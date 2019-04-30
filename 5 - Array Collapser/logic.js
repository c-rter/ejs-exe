const collapse = () => {
  let arrayRaw = document.getElementById("textArray").value;
  let parsedArray = JSON.parse(arrayRaw);


//  document.getElementById("arrayRenderSpot").innerHTML = parsedArray;
}


const clearArraySpot = () => {
  document.getElementById("arrayRenderSpot").innerHTML = "";
}
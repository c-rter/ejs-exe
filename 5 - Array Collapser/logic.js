 const collapse = () => {
  let arrayRaw = document.getElementById("textArray").value;
  let parsedArray = JSON.parse(arrayRaw);
  console.log(parsedArray);
let flattenedArray = parsedArray.reduce((a, b) => a.concat(b));
console.log(flattenedArray);

  document.getElementById("arrayRenderSpot").innerHTML = JSON.stringify(flattenedArray);
}


const clearArraySpot = () => {
  document.getElementById("arrayRenderSpot").innerHTML = "";
}



/* let arrays = [[1, 2, 3], [4, 5], [6]];

// → [1, 2, 3, 4, 5, 6]

let flattenedArray = arrays.reduce((a, b) => a.concat(b));
console.log(flattenedArray);

*/
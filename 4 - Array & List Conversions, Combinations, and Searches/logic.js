const inputRouter = () => {

  let fields = ["arrayToList", "listToArray", "listPrepend",
    "elementPrepend", "listReturn", "elementReturn"];

  let valiCounter = 0;
  let routerLog = [];

  for (i = 0; i < fields.length - 1; i++) {
    if (!(document.getElementById(fields[i]).value == "")) {
      valiCounter++;
      routerLog.push(fields[i]);
    }
  }

  if (valiCounter < 1) {
    alert("no input!");
  }
  else if (valiCounter > 2 || ((valiCounter > 1) &&
    (!(document.getElementById("arrayToList").value == "")
      || !(document.getElementById("listToArray").value == ""))
  )) {
    alert("too many inputs!");
  }
  else {
    receiver[routerLog[0]]();
  }
}

const clearAll = () => {
  document.getElementById("resultRenderSpot").innerHTML = "";
  document.getElementById("frm1").reset();

}

let receiver = {

  arrayToList: function () {
    console.log("Array to List");
    let inputArray = document.getElementById("arrayToList").value;
    let parsedArray = JSON.parse(inputArray);
    let convertedList = {};

    for (i = parsedArray.length - 1; i > -1; i--) {
      convertedList = { value: parsedArray[i], rest: convertedList };
      if (i == parsedArray.length - 1) {
        convertedList.rest = null;
      }
    }
    document.getElementById("resultRenderSpot").innerHTML = JSON.stringify(convertedList);

  },

  listToArray: function () {

    let inputList = document.getElementById("listToArray").value;
    let parsedArray = JSON.parse(inputList);

    let convertedArray = [];
    for (let node = parsedArray; node; node = node.rest) {
      convertedArray.push(node.value);
    }
    console.log(convertedArray);
    document.getElementById("resultRenderSpot").innerHTML = JSON.stringify(convertedArray);

  },

  listPrepend: function () {

    let inputElement = document.getElementById("elementPrepend").value;
    let inputList = document.getElementById("listPrepend").value;
    let parsedList = JSON.parse(inputList);
    parsedList = { value: inputElement, rest: parsedList }
    document.getElementById("resultRenderSpot").innerHTML = JSON.stringify(parsedList);

  },

  listReturn: function () {

    let inputElement = document.getElementById("elementReturn").value;
    let inputList = document.getElementById("listReturn").value;

/*
    let inputList = document.getElementById("listToArray").value;
    let parsedArray = JSON.parse(inputList);

    let convertedArray = [];
    for (let node = parsedArray; node; node = node.rest) {
      convertedArray.push(node.value);
    }
    console.log(convertedArray);
    document.getElementById("resultRenderSpot").innerHTML = JSON.stringify(convertedArray);
 */

  }

};

const inputRouter = () => {

  let fields = ["arrayToList", "listToArray", "listPrepend",
    "elementPrepend", "listReturn", "elementReturn"];

  let valiCounter = 0;
  let routerLog = "";

  for (i = 0; i < fields.length - 1; i++) {
    if (!(document.getElementById(fields[i]).value == "")) {
      valiCounter++;
      routerLog = fields[i];
    }
  }

  if (valiCounter < 1) {
    alert("no input!");
  }
  else if (valiCounter > 1) {
    alert("too many inputs!");
  }
  else {
    receiver[routerLog]();
  }
}

const clearArraySpot = () => {
  document.getElementById("arrayRenderSpot").innerHTML = "";
}

let receiver = {
  arrayToList: function () {

  },
  listToArray: function () {

  },
  listPrepend: function () {

  },
  listReturn: function () {

  }

};


/*   let arrayRaw = document.getElementById("textArray").value;
  let parsedArray = JSON.parse(arrayRaw);
 document.getElementById("arrayRenderSpot").innerHTML = reversedArray; */

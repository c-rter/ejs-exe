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

const clearArraySpot = () => {
  document.getElementById("arrayRenderSpot").innerHTML = "";
}

let receiver = {

  arrayToList: function () {
    alert("Array to List");
  },

  listToArray: function () {
    alert("List to Array");
  },
  
  listPrepend: function () {
    alert("List with Prepend");
  },

  listReturn: function () {
    alert("Return Element List");
  }

};


/*   let arrayRaw = document.getElementById("textArray").value;
  let parsedArray = JSON.parse(arrayRaw);
 document.getElementById("arrayRenderSpot").innerHTML = reversedArray; */

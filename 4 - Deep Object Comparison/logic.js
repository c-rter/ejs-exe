/* const inputHandler = () => {
  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;
  let comparisonStatus = deepAnalyze(input1, input2);  }
 */

const objectComparisonTest = () => {
  alert(testTheObjects({ here: { is: "an" }, object: 3 }, { here: { is: "an" }, object: 2 }));
}

const testTheObjects = (object1, object2) => {

  if (object1 === object2) return true;
  if (object1 == null || typeof object1 != "object" || object2 == null || typeof object2 != "object") {
    return false;
  }

  let object1keys = Object.keys(object1);
  let object2keys = Object.keys(object2);

  if (object1keys.length != object2keys.length) {
    return false;
  }

  for (i = 0; i < object1keys.length; i++) {
    console.log(object1keys);
    console.log(object1keys[i]);
    console.log(object1[object1keys[i]]);
    if (object1keys[i] != object2keys[i]) {
      return false;
    }
    else if (!testTheObjects(object1[object1keys[i]], object2[object2keys[i]])) {
      return false;
    }
  }

return true;

}

/* const deepAnalyze = (input1, input2) => {
  try {
    let parseTest = JSON.parse(input1);
    let parseTest2 = JSON.parse(input2);
    if ((typeof parseTest === "object" && parseTest !== null)
      && (typeof parseTest2 === "object" && parseTest2 !== null)) {
      console.log("two objects");
      return testTheObjects(parseTest, parseTest2);
    }
    else {
      console.log("not two objects");
      if (!(parseTest === parseTest2)) {
        return false;
      }
      else {
        return true;
      }
    }
  }
  catch (err) {
    alert("not a proper value");
    return false;
  }
} */

const clearForm = () => {
  document.getElementById("resultRenderSpot").innerHTML = "";
  document.getElementById("frm1").reset();
}
const inputHandler = () => {

  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;
  let comparisonStatus = deepAnalyze(input1, input2);

}

const testTheObjects = (object1, object2) => {



}

const deepAnalyze = (input1, input2) => {

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
}

const clearForm = () => {
  document.getElementById("resultRenderSpot").innerHTML = "";
  document.getElementById("frm1").reset();

}
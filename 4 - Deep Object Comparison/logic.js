const inputHandler = () => {

  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;

}

const deepAnalyze = (object1, object2) => {
  
//  check typeof
//  if not object, use built in comparison, return boolean
//  if objects:
//  let parsedObject1 = JSON.parse(input1);
//  let parsedObject2 = JSON.parse(input2);
//  object keys, run through and recurse until non-objects can be compared

}

const clearForm = () => {
  document.getElementById("resultRenderSpot").innerHTML = "";
  document.getElementById("frm1").reset();

}
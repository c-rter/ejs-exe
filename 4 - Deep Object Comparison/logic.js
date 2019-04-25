const inputHandler = () => {

  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;
  let comparisonStatus = deepAnalyze (input1, input2);

}

const deepAnalyze = (input1, input2) => {
  

  console.log(typeof input1);
  console.log(typeof input2);
  let parseTest = JSON.parse(input1);
  let parseTest2 = JSON.parse(input2);
  console.log(typeof parseTest);
  console.log(typeof parseTest2);

if ((typeof input1 === "object" && input1 !== null) 
&& (typeof input2 === "object" && input2 !== null)) {
console.log("two objects");

}

else {
console.log("not two objects");

}

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

function minReturner() {

  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  if (num1 < num2) {
    document.getElementById("answer").innerHTML = num1;
  }
  else if (num1 == num2) {
    document.getElementById("answer").innerHTML = "No minimum";
  }
  else {
    document.getElementById("answer").innerHTML = num2;
  }
};

function printFizzBuzzFunction() {

  let fizzValue = document.getElementById("fizzInput").value;
  let buzzValue = document.getElementById("buzzInput").value;
  let divBlock = "";

  for (i = 1; i < 101; i++) {

    let printContainer = "";

    if ((i % fizzValue) == 0) {
      printContainer = "Fizz";
    }

    if ((i % buzzValue) == 0) {
      printContainer += "Buzz";
    }

    if (((i % fizzValue) != 0) && ((i % buzzValue) != 0)) {
      printContainer += i;
    }

    divBlock += printContainer + "<br>"
    
  }

  document.getElementById("fizzBuzzSpan").innerHTML = divBlock;

};
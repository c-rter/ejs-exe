

  function minReturner() {

    let num1String = $("#num1").value;
    let num2String = $("#num2").value;
    console.log(typeof num1string);

    let num1 = parseInt(num1String);
    let num2 = parseInt(num2String);

    if (num1 < num2) {
      $("#answer").text(num1);

    }
    else if (num1 == num2) {
      $("#answer").text("No minimum");
    }
    else {
      $("#answer").text(num2);

    }
  };
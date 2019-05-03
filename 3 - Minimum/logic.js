  function minReturner() {

    let num1String = $("#num1").val();
    let num2String = $("#num2").val();

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
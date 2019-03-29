function printChessboard() {

  let gridSize = document.getElementById("gridSize").value;
  let textValue = "";
  let boardRow = "";

  for (i = 0; i < gridSize; i++) {
    for (j = 0; j < gridSize; j++) {
      if ((i % 2) == 0) {
        if ((j % 2) == 0) {
          boardRow += "&nbsp&nbsp&nbsp";
        }
        else {
          boardRow += "#";
        }
      }
      else {
        if ((j % 2) == 0) {
          boardRow += "#";
        }
        else {
          boardRow += "&nbsp&nbsp&nbsp";
        }
      }
    }
    textValue += boardRow + "<br>";
    boardRow = "";
  }


  document.getElementById("boardSpan").innerHTML = textValue;

};
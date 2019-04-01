// In Progress

const createRange = (start, end, step) => {

  rangeArr = []
  if (step == undefined) {
    for (i = start; i <= end; i++) {
      rangeArr.push(i);
    }
  }
  else if (step < 0) {
    for (i = start; i >= end; i -= step) {
      rangeArr.push(i);
    }
  }
  else {
    for (i = start; i <= end; i += step) {
      rangeArr.push(i);
    }
  }
}

const receiveInput = () => {
  let gridSize = document.getElementById("targetText").value;
  document.getElementById("boardSpan").innerHTML = createRange(gridSize);

};
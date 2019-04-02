// In Progress

const createRange = (start, end, step) => {

  rangeArr = [];
  let startCount = parseInt(start);
  let endCount = parseInt(end);
  let stepCount = parseInt(step);

  if (isNaN(stepCount)) {
    for (i = startCount; i <= endCount; i++) {
      rangeArr.push(i);
    }
  }
  else if (stepCount < 0) {
    for (i = startCount; i >= endCount; i += stepCount) {
      rangeArr.push(i);
    }
  }
  else {
    for (i = startCount; i <= endCount; i += stepCount) {
      rangeArr.push(i);
    }
  }

return rangeArr;

}

const receiveInput = () => {
  let startInt = document.getElementById("startInt").value;
  let endInt = document.getElementById("endInt").value;
  let stepInt = document.getElementById("stepInt").value;
  document.getElementById("range").innerHTML = createRange(startInt, endInt, stepInt);

};
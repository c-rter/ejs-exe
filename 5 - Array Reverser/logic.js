let currentArray;

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
  currentArray = createRange(startInt, endInt, stepInt);
  document.getElementById("range").innerHTML = currentArray;

}

const summateRange = () => {
  let runningSum = 0;
  for (i = 0; i < currentArray.length; i++) {
    runningSum += currentArray[i];
  }
  document.getElementById("sum").innerHTML = runningSum;

}
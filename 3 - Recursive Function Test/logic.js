const isEven = (target) => {

  if (target < 0) {
    target *= -1;
  }  
  
  if (target == 0) {
    return true;
  }
  else if (target == 1) {
    return false;
  }
  else {
    target -= 2;
    return isEven(target);
  }
}

const receiveInput = () => {
  let gridSize = document.getElementById("targetText").value;
  document.getElementById("boardSpan").innerHTML = isEven(gridSize);

};
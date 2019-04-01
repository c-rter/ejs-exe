const charChecker = (word, char) => {

  let charCounter = 0;
  
  for (i=0; i<word.length; i++) {
    if (word[i] == char) {
      charCounter++;
    }
  }

  return charCounter;

}

const receiveInput = () => {
  let wordToCheck = document.getElementById("wordInput").value;
  let charToCheck = document.getElementById("charInput").value;

  document.getElementById("resultsSpan").innerHTML = charChecker(wordToCheck, charToCheck);

};
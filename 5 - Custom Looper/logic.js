let loop = (val, test, update, body) => {

  let currentVal = val;

  while (test(currentVal)) {
    body(currentVal);
    currentVal = update(currentVal);
  }

};

loop(3, n => n > 0, n => n - 1, console.log);

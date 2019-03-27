function triangleFunction() {
    let triangleDepth = document.getElementById("depth").value;
    let divBlock = "";
    let hashLine = "";
    for (i = 0; i < triangleDepth; i++) {
      hashLine += "#";
      divBlock += hashLine + "<br>"
    }
    document.getElementById("triangleSpan").innerHTML = divBlock;
  };
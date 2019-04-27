document.addEventListener("keydown", event => {
  if (event.isComposing || event.keyCode === 13) {
    alert("YOU PRESSED ENTER");
    return;
  }
  // do something
});
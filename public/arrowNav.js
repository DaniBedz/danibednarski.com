document.addEventListener('keydown', function (event) {
  if (event.code == 'ArrowRight' && (document.activeElement.type !== "text" && document.activeElement.type !== "textarea")) {
    let next = document.getElementsByClassName("awssld__next");
    next[0].click();
  }
  if (event.code == 'ArrowLeft' && (document.activeElement.type !== "text" && document.activeElement.type !== "textarea")) {
    let next = document.getElementsByClassName("awssld__prev");
    next[0].click();
  }
});
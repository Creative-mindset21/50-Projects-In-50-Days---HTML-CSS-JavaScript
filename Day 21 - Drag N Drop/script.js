const fill = document.querySelector(".fill");
const empty = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

empty.forEach((em) => {
  em.addEventListener("dragover", dragOver);
  em.addEventListener("dragenter", dragEnter);
  em.addEventListener("dragleave", dragLeave);
  em.addEventListener("drop", dragDrop);
});

function dragStart() {
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd() {
  this.className = "fill";
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}

function dragLeave() {
  this.className = "empty";
}

function dragDrop() {
  this.className = "empty";
  this.append(fill);
}

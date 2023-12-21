const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty"); // Use querySelectorAll to select multiple elements

fill.addEventListener("dragstart", dragstart);
fill.addEventListener("dragend", dragend);

for (const empty of empties) {
  empty.addEventListener("dragover", dragover);
  empty.addEventListener("dragenter", dragenter);
  empty.addEventListener("dragleave", dragleave);
  empty.addEventListener("drop", dragdrop);
}

function dragstart() {
  this.clasName += " hold";
  setTimeout(() => ((this.clasName += "invisible"), 0));
}

function dragend() {
  this.clasName += " fill";
  this.clasName += "invisible";
}

function dragover(e) {
  e.preventDefault();
}

function dragenter(e) {
  e.preventDefault();
  this.clasName += " hovered";
}

function dragleave() {
  this.clasName = "empty";
}

function dragdrop() {
  this.clasName += "empty";
  this.append(fill);
}

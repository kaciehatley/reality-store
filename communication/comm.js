let commStmt = document.getElementById("commStmt");

let commCost = localStorage.getItem("commCost");
let numLines = localStorage.getItem("numLines");

window.onload = function () {
  let comm = document.getElementById("commCost");
  let lines = document.getElementById("numLines");

  if (commCost && numLines) {
    comm.value = commCost;
    lines.value = numLines;

    commStmt.innerHTML =
      "You spend $" + commCost + " monthly for " + numLines + " phone lines.";
  }
};

let buyPhones = function () {
  let comm = document.getElementById("commCost").value;
  let lines = document.getElementById("numLines").value;

  commStmt.innerHTML =
    "You spend $" + comm + " monthly for " + lines + " phone lines.";

  localStorage.setItem("commCost", comm);
  localStorage.setItem("numLines", lines);

  window.scrollTo(0, 0);
};

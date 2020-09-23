let entertainStmt = document.getElementById("entertainStmt");

let cost = localStorage.getItem("entertainCost");
let pkg = localStorage.getItem("package");
let numPpl = localStorage.getItem("familyMembers");

window.onload = function () {
  let entertainCost = document.getElementById("entertainCost");
  let package = document.getElementById("package");
  let familyMembers = document.getElementById("numPpl");

  if (entertainCost && package) {
    entertainCost.value = cost;
    package.value = pkg;
    familyMembers.value = numPpl;

    entertainStmt.innerHTML =
      "You spend $" +
      cost +
      " monthly on the " +
      pkg +
      " entertainment package for your family of " +
      numPpl +
      ".";
  }
};

let buyPackage = function () {
  let entertainCost = document.getElementById("entertainCost").value;
  let package = document.getElementById("package").value;
  let familyMembers = document.getElementById("numPpl").value;

  entertainStmt.innerHTML =
    "You spend $" +
    entertainCost +
    " monthly on the " +
    package +
    " entertainment package for your family of " +
    familyMembers +
    ".";

  localStorage.setItem("entertainCost", entertainCost);
  localStorage.setItem("package", package);
  localStorage.setItem("familyMembers", familyMembers);

  window.scrollTo(0, 0);
};

let groceryStmt = document.getElementById("groceryStmt");

let groceryCost = localStorage.getItem("groceryCost");
let familyMembers = localStorage.getItem("familyMembers");

window.onload = function () {
  let foodCost = document.getElementById("foodCost");
  let pplFeeding = document.getElementById("pplFeeding");

  if (groceryCost && familyMembers) {
    foodCost.value = groceryCost;
    pplFeeding.value = familyMembers;

    groceryStmt.innerHTML =
      "You spend $" +
      groceryCost +
      " monthly to feed your family of " +
      familyMembers +
      ".";
  }
};

let buyFood = function () {
  let foodCost = document.getElementById("foodCost").value;
  let pplFeeding = document.getElementById("pplFeeding").value;

  groceryStmt.innerHTML =
    "You spend $" +
    foodCost +
    " monthly to feed your family of " +
    pplFeeding +
    ".";

  localStorage.setItem("groceryCost", foodCost);
  localStorage.setItem("familyMembers", pplFeeding);

  window.scrollTo(0, 0);
};

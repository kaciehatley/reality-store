let personalStmt = document.getElementById("personalStmt");

let clothes = localStorage.getItem("clothes");
let personalCare = localStorage.getItem("personalCare");

window.onload = function () {
  let clothCost = document.getElementById("clothCost");
  let careCost = document.getElementById("careCost");

  if (clothes && personalCare) {
    clothCost.value = clothes;
    careCost.value = personalCare;

    personalStmt.innerHTML =
      "You spend $" +
      clothes +
      " monthly on clothing and $" +
      personalCare +
      " monthly on personal care products.";
  }
};

let buyPersonal = function () {
  let clothCost = document.getElementById("clothCost").value;
  let careCost = document.getElementById("careCost").value;

  personalStmt.innerHTML =
    "You spend $" +
    clothCost +
    " monthly on clothing and $" +
    careCost +
    " monthly on personal care products.";

  localStorage.setItem("clothes", clothCost);
  localStorage.setItem("personalCare", careCost);

  window.scrollTo(0, 0);
};

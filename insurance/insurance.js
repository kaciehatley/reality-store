let insuranceStmt = document.getElementById("insuranceStmt");

let ins = localStorage.getItem("ins");

window.onload = function () {
  let insCost = document.getElementById("insCost");

  if (ins) {
    insCost.value = ins;

    insuranceStmt.innerHTML = "You spend $" + ins + " monthly on insurance.";
  }
};

let buyInsurance = function () {
  let insCost = document.getElementById("insCost").value;

  insuranceStmt.innerHTML = "You spend $" + insCost + " monthly on insurance.";

  localStorage.setItem("ins", insCost);

  window.scrollTo(0, 0);
};

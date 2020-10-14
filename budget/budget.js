let number = localStorage.getItem("number");
let houseID = localStorage.getItem("house");
let carID = localStorage.getItem("car");
let groceryCost = localStorage.getItem("groceryCost");
let familyMembers = localStorage.getItem("familyMembers");
let entertains = localStorage.getItem("entertainCost");
let entertainPkg = localStorage.getItem("package");
let comm = localStorage.getItem("commCost");
let lines = localStorage.getItem("numLines");
let ins = localStorage.getItem("ins");
let clothes = localStorage.getItem("clothes");
let personalCare = localStorage.getItem("personalCare");

let house = housingOptions[houseID];
let car = transportOptions[carID];

let totalIncome = document.getElementById("totalIncome");

let houseCost = document.getElementById("houseCost");
let carCost = document.getElementById("carCost");
let foodCost = document.getElementById("foodCost");
let entertainCost = document.getElementById("entertainCost");
let commCost = document.getElementById("commCost");
let insCost = document.getElementById("insCost");
let clothCost = document.getElementById("clothCost");
let careCost = document.getElementById("careCost");

let housePymt = 0;
let carPymt = 0;
let foodPymt = 0;
let entertainPymt = 0;

function numberWithCommas(x) {
  if (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}

function calculate() {
  let remaining =
    data[number].monthlyNet -
    housePymt -
    carPymt -
    foodPymt -
    entertainPymt -
    comm -
    ins -
    clothes -
    personalCare;
  document.getElementById("fundsRemaining").innerHTML =
    "$" + numberWithCommas(remaining);
}

window.onload = function () {
  totalIncome.innerHTML = "$" + numberWithCommas(data[number].monthlyNet);
  if (house.type === "apartment") {
    houseCost.innerHTML =
      "- $" + numberWithCommas(housingOptions[houseID].rent);
    housePymt = housingOptions[houseID].rent;
  }
  if (house.type === "house") {
    houseCost.innerHTML =
      "- $" + numberWithCommas(housingOptions[houseID].mortgage);
    housePymt = housingOptions[houseID].mortgage;
  }
  if (car) {
    carCost.innerHTML = "- $" + numberWithCommas(car.total);
    carPymt = car.total;
  }
  if (groceryCost) {
    foodCost.innerHTML =
      "- $" +
      numberWithCommas(groceryCost) +
      " for a family of " +
      familyMembers;
    foodPymt = groceryCost;
    console.log(foodPymt);
  }
  if (entertains) {
    entertainCost.innerHTML =
      "- $" +
      numberWithCommas(entertains) +
      " for the " +
      entertainPkg +
      " package";
    entertainPymt = entertains;
  }
  if (comm) {
    commCost.innerHTML =
      "- $" + numberWithCommas(comm) + " for " + lines + " phone lines.";
  }
  if (ins) {
    insCost.innerHTML = "- $" + numberWithCommas(ins);
  }
  if (clothes) {
    clothCost.innerHTML = "- $" + numberWithCommas(clothes);
  }
  if (personalCare) {
    careCost.innerHTML = "- $" + numberWithCommas(personalCare);
  }
  calculate();
};

let number = localStorage.getItem("number");
let houseID = localStorage.getItem("house");
let carID = localStorage.getItem("car");

let house = housingOptions[houseID];
let car = transportOptions[carID];

let totalIncome = document.getElementById("totalIncome");

let houseCost = document.getElementById("houseCost");
let carCost = document.getElementById("carCost");

let housePymt = 0;
let carPymt = 0;

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function calculate() {
  let remaining = data[number].monthlyNet - housePymt - carPymt;
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
  calculate();
};

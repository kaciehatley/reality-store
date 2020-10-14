let furnitureStmt = document.getElementById("furnitureStmt");
let purchaseBtn = document.getElementsByClassName("btn");

let furniture = localStorage.getItem("furniture");

// window.onload = function () {
//   let clothCost = document.getElementById("clothCost");

//   if (clothes && personalCare) {
//     clothCost.value = clothes;
//     careCost.value = personalCare;

//     personalStmt.innerHTML =
//       "You spend $" +
//       clothes +
//       " monthly on clothing and $" +
//       personalCare +
//       " monthly on personal care products.";
//   }
// };

purchaseBtn.addEventListener("click", function (event) {
  console.log(event);
});

// let buyFurniture = function () {
//   let clothCost = document.getElementById("clothCost").value;
//   let careCost = document.getElementById("careCost").value;

//   personalStmt.innerHTML =
//     "You spend $" +
//     clothCost +
//     " monthly on clothing and $" +
//     careCost +
//     " monthly on personal care products.";

//   localStorage.setItem("furniture", furniture);

//   window.scrollTo(0, 0);
// };

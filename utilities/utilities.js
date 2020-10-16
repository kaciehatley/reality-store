window.onload = function () {
  let utilities = localStorage.getItem("utilities");
  if (utilities) {
    let element = document.getElementById(utilities);
    element.innerHTML = "Purchased!";
    element.classList.add("active");
  }
};

document.addEventListener("click", function (event) {
  if (event.target.value > 0) {
    let utilCost = event.target.value;
    localStorage.setItem("utilities", utilCost);
    window.location.reload();
  }
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

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

document.getElementById("transport").innerHTML = transportOptions
  .map(
    (car) =>
      `<div class="card col-sm-4" style="width: 18rem; display: inline-block">
      <img class="card-img-top cardImg" src=${car.photo} alt="Card image cap">
      <div class="card-body">
        <h4 class="card-title">${car.year} ${car.make} ${car.model}</h4>
        <p class="card-text">${car.description}</p>
        <h5 class="card-text">Cost: $${numberWithCommas(car.cost)}</h5>
        <p class="card-text">Monthly Payment: $${car.monthlyPymt}/mo.</p>
        <p class="card-text">Insurance: $${car.insurance}/mo.</p>
        <p class="card-text">Gas: $${car.gas}/mo.</p>
        <p class="card-text">Total: $${car.total}/mo.</p>
        <a onclick=buyCar() class="btn btn-primary purchaseCar" id=${
          car.id
        }><i class="fa fa-check"></i> Purchase</a>
      </div>
  </div>`
  )
  .join("");

let selectedCar = localStorage.getItem("car");

window.onload = function () {
  if (selectedCar) {
    let element = document.getElementById(selectedCar);
    element.innerHTML = "Purchased!";
    element.classList.add("active");
  }
};

var buttons = document.getElementsByClassName("purchaseCar");

let buyCar = function () {
  let button = event.target;
  let num = event.target.id;
  let currentActive = document.getElementById(selectedCar);
  if (currentActive) {
    currentActive.classList.remove("active");
    localStorage.removeItem("car");
  }
  localStorage.setItem("car", num);
  //   if (housingOptions[num].type == "apartment") button.innerHTML = "Purchased!";
  button.classList.add("active");
  window.location.reload();
};

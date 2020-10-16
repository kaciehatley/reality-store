let rentals = [];
let forSale = [];

housingOptions.map((house) => {
  if (house.type == "apartment") {
    rentals.push(house);
    console.log(rentals);
  }
});

housingOptions.map((house) => {
  if (house.type == "house") {
    forSale.push(house);
  }
});

document.getElementById("rent").innerHTML = rentals
  .map(
    (house) =>
      `<div class="card col-sm-4" style="width: 18rem; display: inline-block">
      <img class="card-img-top cardImg" src=${house.photo} alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${house.description}</h5>
        <p class="card-text">Square Footage: ${house.squareFt}</p>
        <p class="card-text">Rent: $${house.rent}/mo.</p>
        <p class="card-text">Renter's Insurance: $${house.insurance}/mo.</p>
        <p class="card-text">Total: $${house.totalDue}/mo.</p>
        <a onclick=housing() class="btn btn-primary purchaseHousing" id=${house.id}><i class="fa fa-check"></i>Rent</a>
      </div>
  </div>`
  )
  .join("");

document.getElementById("purchase").innerHTML = forSale
  .map(
    (house) =>
      `<div class="card col-sm-4" style="width: 18rem; display: inline-block">
      <img class="card-img-top cardImg" src=${house.photo} alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${house.description}</h5>
        <p class="card-text">Mortgage: $${house.mortgage}/mo.</p>
        <p class="card-text">Taxes: $${house.taxes}/mo.</p>
        <p class="card-text">Insurance: $${house.insurance}/mo.</p>
        <p class="card-text">Total: $${house.totalDue}/mo.</p>
        <a onclick=housing() class="btn btn-primary purchaseHousing" id=${house.id}><i class="fa fa-check"></i>Purchase</a>
      </div>
  </div>`
  )
  .join("");

let selectedHousing = localStorage.getItem("house");

window.onload = function () {
  if (selectedHousing) {
    let element = document.getElementById(selectedHousing);
    element.innerHTML = "Purchased!";
    element.classList.add("active");
  }
};

var buttons = document.getElementsByClassName("purchaseHousing");

let housing = function () {
  let button = event.target;
  let num = event.target.id;
  let currentActive = document.getElementById(selectedHousing);
  if (currentActive) {
    currentActive.classList.remove("active");
    localStorage.removeItem("house");
    localStorage.removeItem("houseCost");
  }
  localStorage.setItem("house", num);
  //   if (housingOptions[num].type == "apartment") button.innerHTML = "Purchased!";
  button.classList.add("active");
  window.location.reload();
};

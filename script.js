let number = localStorage.getItem("number");

window.onload = function () {
  if (number) {
    console.log(number);
  } else {
    let randNum = Math.floor(Math.random() * 58);
    console.log(randNum);
    localStorage.setItem("number", randNum);
    number = randNum;
  }
  createYourInfo();
};

function createYourInfo() {
  let myData = data[number];

  // Creating string for ages and genders of kids
  let children = "";
  let numChildren = myData.children.length;
  if (numChildren == 0) {
    children += "None";
  }
  for (let i = 0; i < numChildren; i++) {
    children +=
      myData.children[i].age + " year old " + myData.children[i].gender;
    if (i !== numChildren - 1) {
      children += ", ";
    }
  }

  // Creating string for custody row
  let custody = "";
  if (myData.maritalStatus !== "Divorced") {
    custody += "N/A";
  } else if (myData.custody == true) {
    custody += "Yes";
  } else if (myData.custody == false) {
    custody += "No";
  }

  // Creating string for child support row
  let childSupportPayment = "";
  if (myData.maritalStatus !== "Divorced") {
    childSupportPayment += "N/A";
  } else if (myData.custody == true) {
    childSupportPayment += "+ $" + myData.childSupport;
  } else if (myData.custody == false) {
    childSupportPayment += "- $" + myData.childSupport;
  }

  // Creating string for spouse income row
  let spouseIncome = "";
  if (myData.maritalStatus !== "Married") {
    spouseIncome += "N/A";
  } else if (myData.spouseGrossIncome == 0) {
    spouseIncome += "Spouse Is Unemployed";
  } else if (myData.maritalStatus == "Married") {
    spouseIncome += "+ $" + numberWithCommas(myData.spouseGrossIncome);
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  document.getElementById("career").innerHTML = myData.career;
  document.getElementById("education").innerHTML = myData.education;
  document.getElementById("loan").innerHTML = "- $" + myData.edCost;
  document.getElementById("marital").innerHTML = myData.maritalStatus;
  document.getElementById("children").innerHTML = children;
  document.getElementById("custody").innerHTML = custody;
  document.getElementById("childSupport").innerHTML = childSupportPayment;
  document.getElementById("annualGross").innerHTML =
    "$" + numberWithCommas(myData.anuualGross);
  document.getElementById("monthlyGross").innerHTML =
    "$" + numberWithCommas(myData.montlyGross);
  document.getElementById("spouseIncome").innerHTML = spouseIncome;
  document.getElementById("totalGross").innerHTML =
    "$" + numberWithCommas(myData.totalMonthlyGross);
  document.getElementById("taxes").innerHTML =
    "- $" + numberWithCommas(myData.taxes);
  document.getElementById("subtotal").innerHTML =
    "$" + numberWithCommas(myData.subtotal);
  document.getElementById("monthlyNet").innerHTML =
    "$" + numberWithCommas(myData.monthlyNet);
}

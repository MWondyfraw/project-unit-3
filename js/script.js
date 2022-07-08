// Interactive Form
// The "Name" Field
// The text field should have focus state by default to prompt the user

const nameField = document.getElementById("name");
nameField.focus();

// The "Job Role" Section
//The "other job text field" should be hidden or disabled unless prompted by the user in the "Job Role menu"
let jobRole = document.querySelector("#job-role");
let otherJobRole = document.querySelector("#other-job-role");
otherJobRole.style.display = "none";
jobRole.addEventListener("change", (e) => {
  if (e.target.value === "other") {
    otherJobRole.style.display = "block";
  } else {
    otherJobRole.style.display = "none";
  }
});
// displayElement('[name="other-job-role"]');
//} else {
//hideElement('[name="other-job-role"]');

// The "T-Shirt info" Section
// The "Color" menu has six options & the "Design" menu has three options
// To prevent users confusion, "Color" menu will be disabled until the "Design" theme is selected

const design = document.getElementById("design");
const color = document.getElementById("color");
color.disabled = true;
let colorOptions = document.querySelectorAll("#color option");
design.addEventListener("change", (e) => {
  color.disabled = false;
  for (let i = 0; i < color.length; i++) {
    let designValue = e.target.value;
    let colorOption = colorOptions[i].getAttribute("data-theme");
    if (designValue === colorOption) {
      colorOptions[i].hidden = false;
      colorOptions[i].setAttribute("selected", true);
    } else {
      colorOptions[i].hidden = true;
      colorOptions[i].removeAttribute("selected");
    }
  }
});

// The "Reigster for Activites" Section
// The total cost should be totaled and displayed for the user

const registerActivities = document.getElementById("activities");
// console.log(registerActivities);
const total = document.getElementById("activities-cost");
let totalCost = 0;

registerActivities.addEventListener("change", (e) => {
  let activityCost = e.target.getAttribute("data-cost");
  let cost = parseInt(activityCost);
  if (e.target.checked) {
    totalCost += cost;
  } else {
    totalCost -= cost;
  }
  total.innerHTML = "Total: $" + totalCost;
});

// The "Payment Info" Section
// The most common payment method should be selected & displayed
// The other payment form sections should be hidden

const paymentOption = document.getElementById("payment");
const creditCard = document.getElementById("credit-card");
const paypal = document.getElementById("paypal");
const bitcoin = document.getElementById("bitcoin");
paypal.hidden = true;
bitcoin.hidden = true;
paymentOption.children[1].setAttribute("selected", true);

paymentOption.addEventListener("change", (e) => {
  console.log(e.target.value);
  if (e.target.value === "paypal") {
    paypal.hidden = false;
    bitcoin.hidden = true;
    creditCard.hidden = true;
  } else if (e.target.value === "bitcoin") {
    paypal.hidden = true;
    bitcoin.hidden = false;
    creditCard.hidden = true;
  } else {
    paypal.hidden = true;
    bitcoin.hidden = true;
    creditCard.hidden = false;
  }
});

// The "Form Validation" Section
// Create a form to listen for submission event & test the value or condition of the submission detected
const nameInput = document.getElementById("name");
const nameHint = document.getElementById("name-hint");
const emailInput = document.getElementById("email");
const emailHint = document.getElementById("email-hint");
const activitiesHint = document.getElementById("activities-hint");
const cardInput = document.getElementById("cc-num");
const cardHint = document.getElementById("cc-hint");
const zipInput = document.getElementById("zip");
const zipHint = document.getElementById("zip-hint");
const cvvInput = document.getElementById("cvv");
const cvvHint = document.getElementById("cvv-hint");
const formInput = document.querySelector("form");
function nameValid() {
  let name = nameInput.value;
  let RegExpName = /\w+/.test(name);
  if (RegExpName) {
    nameHint.style.display = "none";
  } else {
    nameHint.style.display = "block";
  }
  return RegExpName;
}
function emailValid() {
  let email = emailInput.value;
  let RegExpEmail = /[^@]+@[^@.]+\.com$/i.test(email);
  if (RegExpEmail) {
    emailHint.style.display = "none";
  } else {
    emailHint.style.display = "block";
  }
  return RegExpEmail;
  
}
function cardValid() {
  let card = cardInput.value;
  let RegExpCard = /^/d/{13:16}.test(card);
  if (RegExpCard) {
    cardHint.style.display = "none";
  } else {
    cardHint.style.display = "block";
  }
  return RegExpCard;
 
}
function zipValid() {
  let zip = zipInput.value;
  let RegExpZip =  /^/d[5].test(zip);
  if (RegExpZip) {
    zipHint.style.display = "none";
  } else {
    zipHint.style.display = "block";
  }
  return RegExpZip;
  
}
function cvvValid() {
  let cvv = cvvInput.value;
  let RegExpCVV = /^/d[3] / i.test(cvv);
  if (RegExpCVV) {
    cvvHint.style.display = "none";
  } else {
    cvvHint.style.display = "block";
  }
  return RegExpCVV;
}
function activityValid() {
  if (totalCost === 0) {
    activitiesHint.style.display = "block";
    return false;
  } else {
    activitiesHint.style.display = "none";
    return true;
  }
}
function paymentValid() {
  if (paymentOption.value === "credit-card") {
    let varCardValid = cardValid();
    let varCvvValid = cvvValid();
    let varZipValid = zipValid();
    if (varCardValid && varCvvValid && varZipValid) {
      return true;
    } else {
      return false;
    }
  }

  
}

formInput.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("form");
  if (nameValid() && emailValid() && activityValid() && paymentValid()) {
    console.log("form submited");
  } else {
    e.preventDefault();
    activityValid();
    emailValid();
    nameValid();
    paymentValid();
    console.log("incorrect form submited");
  }
});

// The 'Accessibility' Section
// Make sure all the fields are accessible to all users

let checkboxes = document.querySelectorAll("input[type=checbox]");
for (let i = 0; i < checkboxes.length; i++) {
  checkboxesInput[i].addEventListener("focus", (e) => {
    checkboxesInput[i].parentElement.classlist.add("focus");
  });
  checkboxesInput[i].addEventListener("blur", (e) => {
    checkboxesInput[i].parentElement.classlist.remove("focus");
  });
}

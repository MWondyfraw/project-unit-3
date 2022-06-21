// Interactive Form 
// The "Name" Field
// The text field should have focus state by default to prompt the user

const nameField= document.getElementById("name");
nameField.focus();

// The "Job Role" Section
//The "other job text field" should be hidden or disabled unless prompted by the user in the "Job Role menu"

const jobRole = document.getElementById("title");
const otherjobRole = document.getElementById("other-job-role");
jobRole.addEventListener('change',(e) => {
    if (e.target.value === 'other') {
        otherjobRole.style.visibility ='visible'
    } else {
        otherjobRole.style.visibility ='hidden'

    }
    });

// The "T-Shirt info" Section
// The "Color" menu has six options & the "Design" menu has three options
// To prevent users confusion, "Color" menu will be disabled until the "Design" theme is selected

const design = document.getElementById("design");
const color = document.getElementById("color");
color.disabled = true;

design.addEventListener('change',(e) => {
    color.disabled = false;
    for (let i = 0; i < color.length; i++) {
        let = e.target.value; 
        let = colorOptions[i].getAttribute("data-theme");
        if (e.target.value === colorOptions){
            colorOptions[i].hidden = false;
            colorOptions[i].setAttribute('selected'. true);
        } else {

            colorOptions[i].hidden = true;
            colorOptions[i].removeAttribute('selected');
        }
        
        }

        
    });
    
    // The "Reigster for Activites" Section
    // The total cost should be totaled and displayed for the user

    const registerActivites = document.getElementById('activites');
    const total = document.getElementById('total');
    const totalCost = 0;

    document.addEventListener('change', (e) => {
        let = e.target.getAttribute('data-cost');
        if(e.target.checked){
            totalCost += dataCost;
        } else {
            totalCost -= dataCost;

        }
        totalCost.innerHTML = `Total: $${totalCost}`;
    });

    // The "Payment Info" Section
    // The most common payment method should be selected & displayed
    // The other payment form sections should be hidden

    const paymentOption = document.getElementById('payment');
    const creditCard = document.getElementById('credit-card');
    const paypal = document.getElementById('paypal');
    const bitcoin = document.getElementById('bitcoin');
    paypal.hidden = true;
    bitcoin.hidden = true;
    paymentOption.children[1].setAttribute('selected',true);
    
    paymentOption.addEventListener("change", (e) => {
        if (e.target.value === paypal) {
            paypal.hidden = false;
            bitcoin.hidden = true;
            creditcard.hidden = true;
        } else if (e.target.value === bitcoin){
            paypal.hidden = true;
            bitcoin.hidden = false;
            creditcard.hidden = true;

        } else {
            paypal.hidden = true;
            bitcoin.hidden = true;
            creditcard.hidden = false;
        }
    });

    // The "Form Validation" Section
    // Create a form to listen for submission event & test the value or condition of the submission detected
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const cardInput = document.getElementById('card'); 
    const zipInput = document.getElementById('zip');
    const cvvInput = document.getElementById('cvv');
    const formInput = document.getElementById('form');

    function nameValidation () {
        let name = nameField.value;
        return RegExpName = /\w+/.test(name);
    }
    function emailValidation() {
        let email = emailField.value;
        return RegExpEmail = /[^@]+@[^@.]+\.com$/i.test(email);

    }
    function cardValidation () {
        let card = cardField.value;
        return RegExpCard = /^/d/{13:16}.test(credit-card);
    }
    function zipValidation() {
        let zip = zipField.value;
        return RegExpZip = /^/d[5].test(zip);
    }
    function cvvValidation() {
        let cvv = cvvField.value;
        return RegExpCvv = /^/d[3]/i.test(cvv);
    }
    function activityValidation() {
        if (totalCost === 0){
            return false;
        } else {
            return true;
        }
    }
    // If input is not put correctly, error messages will display
    // If intput is put correctly, error message will not display

    if (!nameInput) {
        e.preventDefault();
        validationFail(nameInput);
    } else {
        validationPass(nameInput);
    }

    if (!email) {
        e.preventDefault();
        validationFail('email');
    } else {
        validationPass('email');
    }

    if (!activityTest) {
        e.preventDefault();
        validationFail('activity')
    } else {
        validationPass('activity');
    }

    formInput.addEventListener('submit', (e) => {
        if (validName()&& validEmail()&& validActivity()&& validPayment()) {
           console.log('form submited'); 
        } else {
            e.preventDefault();
            validActivity();
            validEmail();
            validName();
            validPayment();
            console.log('incorrect form submited');
        }
    });

    // The 'Accessibility' Section
    // Make sure all the fields are accessible to all users

    let checkboxes = document.querySelectorAll('input[type=checbox]');
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxesInput[i].addEventListener('focus', (e) => {
            checkboxesInput[i].parentElement.classlist.add('focus');

        });
        checkboxesInput[i].addEventListener('blur', (e) => {
            checkboxesInput[i].parentElement.classlist.remove('focus');


        });
    }
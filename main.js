let nameInput = document.getElementById("nameInput")
let emailInput = document.getElementById("emailInput")
let passInput = document.getElementById("passInput")
let btnSignin = document.getElementById("btnSignin")
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(nameInput + emailInput + passInput + btnSignin);

//check name
function checkName() {
    let nameInput = document.getElementById("nameInput").value
    let nameFeedback = document.getElementById("nameFeedback");
    if (nameInput.length > 5) {
        nameFeedback.textContent="";
        return true
    } else {
        nameFeedback.textContent="it's must be at least 5 characters";
        return false
    }
}
//check email

function checkEmail() {
    let emailInput = document.getElementById("emailInput")
    let emailFeedback = document.getElementById("emailFeedback");
    if (emailRegex.test(emailInput.value)){
        emailFeedback.textContent="";
        return true;
    } else {
        emailFeedback.textContent="Please enter a valid email address"
        return false
    }
}
//check password
function checkPass() {
    let passInput = document.getElementById("passInput").value
    let passFeedback = document.getElementById("passFeedback");
    if (passInput.length > 8){
        passFeedback.textContent="";
        return true
    } else {
        passFeedback.textContent="It must be more than 8 numbers"
        return false
    }
}

async function signup() {
    let isNameValid = checkName();
    let isEmailValid = checkEmail();
    let isPassValid = checkPass();
    if (isNameValid && isEmailValid && isPassValid ){
        let res = await fetch('https://665786425c36170526451ff0.mockapi.io/db-api', {
        method: 'POST',
        body: JSON.stringify({
            nameInput: nameInput.value,
            emailInput: emailInput.value,
            passInput: passInput.value
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
console.log(res);
let data = await res.json();
console.log(data);
localStorage.setItem("userName", nameInput.value);
window.location.href="helloUser.html";
    }
}
// signup();



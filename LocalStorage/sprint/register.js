let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let fullnameInput = document.getElementById("fullname");
let countryInput = document.getElementById("country");
let birthdayInput = document.getElementById("birthday");

function doRegister() {
    let email = emailInput.value;
    let emailError = "";
    if (!email.includes("@")) {
        emailError = "*Email must contain @";
    }

    let user = localStorage.getItem(email);
    if (user !== null) {
        emailError = "*Email already registered";
    }

    let password = passwordInput.value;
    let passwordError = "";
    if (password.length < 6) {
        passwordError = "*Password must be at least 6 characters long";
    }

    let fullname = fullnameInput.value;
    let fullnameError = "";
    if (fullname == "") {
        fullnameError = "*Full Name cannot be empty";
    }

    let country = countryInput.value;
    let countryError = "";
    if (country == "") {
        countryError = "*Country should be selected";
    }

    let birthday = birthdayInput.value;
    let birthdayError = "";
    if (birthday == "") {
        birthdayError = "*Birthday should be selected";
    }

    if (emailError + passwordError + fullnameError + countryError +  birthdayError !=  "") {
        if (emailError != null) {
            document.getElementById("email-error").innerText = emailError;
        }
        if (passwordError != null) {
            document.getElementById("password-error").innerText = passwordError;
        }
        if (fullnameError != null) {
            document.getElementById("fullname-error").innerText = fullnameError;
        }
        if (countryError != null) {
            document.getElementById("country-error").innerText = countryError;
        }
        if (birthdayError != null) {
            document.getElementById("birthday-error").innerText = birthdayError;
        }
        return false;
    }

    let newUser = {
        email: email,
        password: password,
        fullname: fullname,
        country: country,
        birthday: birthday
    }

    localStorage.setItem(email, JSON.stringify(newUser));
    localStorage.setItem("message", "You've successfully registered!\nNow log in into your new account.");
    return true;
}
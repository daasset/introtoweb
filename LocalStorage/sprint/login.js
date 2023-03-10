let messageText = localStorage.getItem("message");
if (messageText !== null) {
    let message = document.getElementById("message");
    message.classList.add("message");
    message.innerText = messageText;
    localStorage.removeItem("message");
}


let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");

function doLogin() {
    let users = JSON.parse(localStorage.getItem("users"));
    if (users == null) {
        users = [];
    }

    let email = emailInput.value;
    let emailError = "";
    if (email == "") {
        emailError = "*Email cannot be empty";
    }

    let password = passwordInput.value;
    let passwordError = "";
    if (password == "") {
        passwordError = "*Password cannot be empty";
    }

    let curUser = null;
    users.forEach(u => {
        if (u.email == email) {
            curUser = u;
        }
    });
    if (curUser == null) {
        emailError = "*Email is not registered";
    } else if (password != curUser.password) {
        passwordError = "*Incorrect password enetered";
    }

    if (emailError + passwordError !=  "") {
        if (emailError != null) {
            document.getElementById("email-error").innerText = emailError;
        }
        if (passwordError != null) {
            document.getElementById("password-error").innerText = passwordError;
        }
        return false;
    }

    localStorage.setItem("loggedUser", email);
    localStorage.setItem("message", "You've successfully logged in!");
    return true;
}
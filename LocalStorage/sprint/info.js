let messageText = localStorage.getItem("message");
if (messageText !== null) {
    let message = document.getElementById("message");
    message.classList.add("message");
    message.innerText = messageText;
    localStorage.removeItem("message");
}


let email = localStorage.getItem("loggedUser");
let user = JSON.parse(localStorage.getItem(email));

document.getElementById("fullname-header").innerText = user.fullname;

document.getElementById("email-info").innerText = user.email;
document.getElementById("fullname-info").innerText = user.fullname;
document.getElementById("country-info").innerText = user.country;
document.getElementById("birthday-info").innerText = user.birthday;

function doLogout() {
    localStorage.removeItem("loggedUser");
    localStorage.setItem("message", "You've successfully logged out!");
    return true;
}
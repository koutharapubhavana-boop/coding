let name = document.getElementById("name");
let email = document.getElementById("email");
let username = document.getElementById("username");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let age = document.getElementById("age");

let registerButton = document.getElementById("registerButton");
let message = document.getElementById("message");

registerButton.addEventListener("click", function() {

    let userName = name.value;
    let userEmail = email.value;
    let userUsername = username.value;
    let userPassword = password.value;
    let userConfirmPassword = confirmPassword.value;
    let userAge = age.value;

    if (userName == "" || userEmail == "" || userUsername == "" ||
        userPassword == "" || userConfirmPassword == "" || userAge == "") {

        message.innerHTML = "Please fill all fields";
        message.style.color = "red";

    }
    else if (userPassword != userConfirmPassword) {

        message.innerHTML = "Passwords do not match";
        message.style.color = "red";

    }
    else if (userAge < 18) {

        message.innerHTML = "Age must be 18 or above";
        message.style.color = "red";

    }
    else {

        message.innerHTML = "Registration Successful";
        message.style.color = "green";
    }

});
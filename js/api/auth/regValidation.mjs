import {register} from "./register.mjs";
import {
    validateUsername,
    emailValidation,
    passwordValidation,
} from "./error.mjs";


const username = document.querySelector("#username");
const username_error = document.querySelector(".username-error-container");
const email = document.querySelector("#emailAddress")
const email_error = document.querySelector(".email-error-container");
const password = document.querySelector("#password");
const password_error = document.querySelector(".password-error-container");

// Values that pass validation will get called to API and registered

export function registrationSuccess (event) {
    event.preventDefault();

    if (validateUsername(username.value)) {
        username_error.style.display = "none";
    } else {
        username_error.style.display = "block";
    }

    if (emailValidation(email.value)) {
        email_error.style.display ="none";
    } else {
        email_error.style.display ="block";
    }

    if (passwordValidation(password.value)) {
        password_error.style.display = "none";
    } else {
        password_error.style.display = "block";
    }

    if (validateUsername(username.value) &&
        emailValidation(email.value) &&
        passwordValidation(password.value)
    ) {
        register(event);
    }
}
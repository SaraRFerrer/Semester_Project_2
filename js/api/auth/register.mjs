import { API_PATH_URL } from "../constants/url.mjs";
import { registrationSuccess } from "./regValidation.mjs";

const form = document.querySelector("form")
const username = document.querySelector("#username");
const email = document.querySelector("#emailAddress");
const password = document.querySelector("#password");


export async function register (url, data) {

 const postData = {
        method: 'POST',
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
            name: username.value,
            email: email.value,
            password: password.value,
        }

        ),
      };

    try {
        
        const response = await fetch (`${API_PATH_URL}/auth/register`, postData);
        console.log(response);
        const json = await response.json();
        console.log(json);
        //window.location.assign("signin.html");
        return json;
      } catch (error) {
        console.log(error);
      }
    }

    form.addEventListener("submit", registrationSuccess);
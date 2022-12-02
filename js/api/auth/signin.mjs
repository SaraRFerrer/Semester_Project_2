import { validateSignin } from "./signinValidation.mjs";
import * as stored from "../constants/stored.mjs";
import { API_PATH_URL } from "../constants/url.mjs";


const email = document.querySelector(".email-container");
const password = document.querySelector(".password-container");

const signinForm= document.querySelector(".signin-form");

    // calling API to get token authorisation and saving them in local storage

    export async function signin () {
        
        const postData = {
            method: 'POST',
            headers: {
              "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify({
                email: email.value,
                password: password.value,
            }
    
            ),
          };

          try {
            const response = await fetch(`${API_PATH_URL}/auth/login`, postData);
            const json = await response.json();
            stored.saved("accessToken", json.accessToken);
            stored.saved("profile", json);
            console.log(json);
            

            if (response.ok) {
              window.location.assign("profile.html");
              
              
          } else {
            throw new Error('Error/ Please try again');
          }

           

            return json;

          } catch (error) {
            console.log(error);
          }
           
            
    } 
    

    signinForm.addEventListener ("submit", validateSignin);
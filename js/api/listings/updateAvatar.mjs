import { load } from "../constants/stored.mjs";
import { API_BASE_URL } from "../constants/url.mjs";

/**
 * Function to initate what to do when edit avatar form is submitted
 * @param {string}
 */

export async function updateAvatar (event) {
    event.preventDefault();
}

const [media] = event.target.elements;

const accessToken = load("accessToken");
const profile = load("profile");

let mediaObject = { avatar: `${media.value}`,};

try {
    const response = await fetch (`${API_BASE_URL}/profiles/${profile.name}/media`,{
        method: "PUT",
      body: JSON.stringify(mediaObject),
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json; charset=utf-8",
      }
    });

    const json = await response.json();

    if (json.errors) {
        const error = event.target.document.querySelector("#error-container");
        error.innerHTML = `<div><p> There was an error, try again</p></div>`;
    
    } else {
        error.innerHTML = `<div><p>Success!</p></div>`;
        location.reload();
    }
    } catch (error) {
        console.log(error)

    };


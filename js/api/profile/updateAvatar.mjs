import { load, saved } from "../constants/stored.mjs";
import { API_PATH_URL } from "../constants/url.mjs";

/**
 * Function to initate what to do when edit avatar form is submitted
 * sending a PUT request to the API
 * @param {string}
 */

const editAvForm = document.querySelector("#editAvForm");
const avatarUrl = document.querySelector("input#avatar-media");

export async function updateAvatar(accessToken, media, username) {
    const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          avatar: media,
        }),
      };

      const response = await fetch(
        `${API_PATH_URL}profiles/${username}/media`,
        options
      );
      const result = await response.json();

      const userMessage = document.querySelector("#user-feedback");

      if (response.ok) {
        const { accessToken, credits, ...profile } = result;
        saved("profile", profile);
        //location.reload();
      } else {
        userMessage.innerHTML = `<div><p> An error has accured</p></div>`
      }


      editAvForm.addEventListener("submit", (event) => {
        const { name } = load("profile");
        const accessToken = load("accessToken");
        event.preventDefault();
        updateAvatar(accessToken, avatarUrl.ariaValueMax, name);

      });
}

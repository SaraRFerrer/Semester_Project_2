import { load } from "../constants/stored.mjs";

const accessProfile = document.querySelector(".profileBtn");

function displayBtn () {

if (!load("accessToken")) {
    accessProfile.style.display = "none";
  }

}

displayBtn();
  
import { load } from "../constants/stored.mjs";



const accessToken = load("accessToken");
const profile = JSON.parse(localStorage.getItem("profile"));
const { name: username, avatar: mediaUrl, credits: credits} = profile;


    const content = document.querySelector(".page-heading");
    if (content) {
        content.innerHTML = `<div class="page-heading">
        <div class="media clearfix">
          <div class="media-left pr30">
            <a href="#">
              <img class="media-object mw150" src="${mediaUrl}">
            </a>
          </div>                      
          <div class="media-body va-m" id="profile-details" >
            <h2 class="media-heading">${username}
              <small> - Profile</small>
            </h2>
            <h5>Your Credits: ${credits}</h5>
                    <button type="button" class="btn btn-outline-primary me-2">Buy Credits</button>
                    <button type="button" class="btn btn-outline-primary me-2">Edit Avatar</button>
          </div>
        </div>
    </div>`;
    }



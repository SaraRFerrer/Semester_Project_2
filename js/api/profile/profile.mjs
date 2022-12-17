import { load } from "../constants/stored.mjs";
import { fetchToken } from "../constants/fetch.mjs";
import { API_PATH_URL } from "../constants/url.mjs";

const content = document.querySelector(".page-heading");
const profilebtn = document.querySelector(".profilebtn");

/**
 * Authenticating the user using fetchToken function
 */

const action = "/profiles";
const user = "?_seller=true&_count=true";

export async function getProfile (name) {


  if (!localStorage.getItem("accessToken")) {
    window.location.href = "signin.html";
    throw new Error ("Please Log In!")
  }


  if(!name){
    throw new Error("Request requires a user name");
  }

  const profile_URL = `${API_PATH_URL}${action}/${name}${user}`;

  const response = await fetchToken (profile_URL)

  return await response.json();
}


async function userProfile () {

  // Update saved data in localStorage when viewing own profile
  

  const userData = load("profile");
  const { name, credits, avatar} = userData;
  



  if (content) {
    content.innerHTML = `<div class="page-heading">
    <div class="media clearfix">
      <div class="media-left pr30">
        <a href="#">
          <img class="media-object mw150" src="${avatar}">
        </a>
      </div>                      
      <div class="media-body va-m" id="profile-details" >
        <h2 class="media-heading">${name}
          <small> - Profile</small>
        </h2>
        <h5>Your Credits: ${credits}</h5>
        
        </div>
           </div>
             </div>
      </div>
    </div>
</div>`;
}

}

userProfile();


    



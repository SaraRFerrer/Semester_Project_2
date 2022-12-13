import { API_PATH_URL } from "../constants/url.mjs";
import { fetchToken } from "../constants/fetch.mjs";
import { isLoggedIn } from "../profile/isLoggedIn.mjs";

/**
 * Function to get sigle listing with ID
 * @param 
 * @returns sigle listing
 */

 const queryString = document.location.search;
 const params = new URLSearchParams(queryString);
 const id = params.get("id");
 const listing = document.querySelector("#singleListing")



const action = "/listings";
const user = "?_seller=true&_bids=true"

export async function singleListing () {

    if (!localStorage.getItem("accessToken")) {
        window.location.href = "signin.html";
        throw new Error ("Please Log In!")
      }
    if(!id) {
        throw new Error ("Request Requires Listing ID");
    }

    const singleListingURL = `${API_PATH_URL}${action}/${id}${user}`;

    const response = await fetchToken (singleListingURL)
    
    const json = await response.json();
    console.log(json);

    document.title = json.title;
    createHTML(json);

    if (createHTML) {

    }
}

singleListing();

function createHTML (json) {
    const date = new Date (json.endsAt);
    const created = date.toDateString(); 
    if (json.media.length === 0) {
        json.media = 'https://png.pngitem.com/pimgs/s/287-2876527_uncle-mike-s-qd115-ns-circle-hd-png.png';
      }
    
    listing.innerHTML += `
    <div class="container">
    <section class="mx-auto my-5" style="max-width: 30rem;">
        
      <div class="card">
      <h5 class="card-title font-weight-bold">${json.seller.name}</h5>
        <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
          <img src="${json.media}" class="img-fluid single-image" />
        </div>
        <div class="card-body">
          <h5 class="card-title font-weight-bold">${json.title}</h5>
          
          <p class="mb-2">${created}</p>
          <p class="card-text">${json.description}</p>
          <hr class="my-4" />
          <p class="lead"><strong>Existing bids:</strong></p>
          <p class="lead">${json._count.bids}</p>
          <p class="lead">${json.bids.amount}</p>
       
        </div>
      </div>
      
    </section>
  </div>`

};

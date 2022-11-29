import { API_PATH_URL } from "../constants/url.mjs";
import { listingTemplate } from "../templates/templates.mjs";


const listings = "/listings";

export async function getPosts(postData) {
    const renderUrl =
      `${API_PATH_URL}${listings}`;
  
    const response = await fetch(renderUrl);
    const json = await response.json();
    console.log(json);

    try {
      const listingsContainer = document.querySelector(".listings-container");

      listingsContainer.innerHTML = "";
      for(let i = 0; i < json.length; i++) {
  
          const listings = json[i];
  
          listingsContainer.innerHTML +=  `
          <section style="background-color: #eee;">
              <div class="container py-5">
                <div class="row">
                  <div class="col-md-12 col-lg-4 mb-4 mb-lg-0">
                    <div class="card">
                      <div class="d-flex justify-content-between p-3">
                        <p class="lead mb-0">${listings.created}</p>
                      </div>
                      <img src="${listings.media}"
                        class="card-img-top" />
                      <div class="card-body">
                        <div class="d-flex justify-content-between">
                          <p class="small">${listings.title}</p>
                        </div>
            
                        <div class="d-flex justify-content-between mb-3">
                          <h5 class="mb-0">${listings.description}</h5
                        </div>
                      </div>
                    </div>
                  </div>
          </section`
      
      }
  } catch (error){
    console.log(error);
  }


}

getPosts();

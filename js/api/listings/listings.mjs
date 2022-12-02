import { API_PATH_URL } from "../constants/url.mjs";


const wrapper = document.querySelector("#wrapper");


const listings = "/listings";

export async function getPosts() {
    const renderUrl =
      `${API_PATH_URL}${listings}`;
  
    const response = await fetch(renderUrl);
    const json = await response.json();
    console.log(json);

 /**
     * User can search the array filtering the posts.
     * @param {string} listings
     */

  function searchFeed (json) {
    const searchInput = document.querySelector("#search");

    searchInput.onkeyup = function (event) {
        
        const filterValue = event.target.value.trim().toLowerCase();

       
        const filteredFeed = json.filter(function (listing) {
            if (listing.title.toLowerCase().includes(filterValue) || listing.body.toLowerCase().includes(filterValue)) {
                return true;
            }
        });

        wrapper.innerHTML = "";

        console.log(filteredFeed);
        for(let i = 0; i < json.length; i++) {
          wrapper.innerHTML +=  `
          <section style="background-color: #eee;">
              <div class="container py-5">
                <div class="row">
                  <div class="col-md-12 col-lg-4 mb-4 mb-lg-0">
                    <div class="card">
                      <div class="d-flex justify-content-between p-3">
                        <p class="lead mb-0">${filteredFeed[i].created}</p>
                      </div>
                      <img src="${filteredFeed[i].media}"
                        class="card-img-top" />
                      <div class="card-body">
                        <div class="d-flex justify-content-between">
                          <p class="small">${filteredFeed[i].title}</p>
                        </div>
            
                        <div class="d-flex justify-content-between mb-3">
                          <h5 class="mb-0">${filteredFeed[i].description}</h5
                        </div>
                      </div>
                    </div>
                  </div>
          </section`
        }
      };
    }
      searchFeed(json);



    try {
      const listingsContainer = document.querySelector(".listings-container");

      listingsContainer.innerHTML = "";
      for(let i = 0; i < json.length; i++) {
          listingsContainer.innerHTML +=  `
          <section style="background-color: #eee;">
              <div class="container py-5">
                <div class="row">
                  <div class="col-md-12 col-lg-4 mb-4 mb-lg-0">
                    <div class="card">
                      <div class="d-flex justify-content-between p-3">
                        <p class="lead mb-0">${json[i].created}</p>
                      </div>
                      <img src="${json[i].media}"
                        class="card-img-top" />
                      <div class="card-body">
                        <div class="d-flex justify-content-between">
                          <p class="small">${json[i].title}</p>
                        </div>
            
                        <div class="d-flex justify-content-between mb-3">
                          <h5 class="mb-0">${json[i].description}</h5
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

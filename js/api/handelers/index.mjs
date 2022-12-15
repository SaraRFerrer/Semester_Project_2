import { API_PATH_URL } from "../constants/url.mjs";

const card = document.querySelector(".index-container")
const listings = "/listings?limit=9";


/**
 * GET request to the API to get listings 
 */


async function carouselListings() {
    const renderUrl =
      `${API_PATH_URL}${listings}`;
  
    const response = await fetch(renderUrl);
    const json = await response.json();
    console.log(json);

    try {

      card.innerHTML = " ";

      for(let i = 0; i < json.length; i++) {
        const date = new Date (json[i].endsAt);
        const created = date.toDateString(); 
        if (json[i].media.length === 0) {
          json[i].media = 'https://png.pngitem.com/pimgs/s/287-2876527_uncle-mike-s-qd115-ns-circle-hd-png.png';
        } else if (json[i].media.status == 403) {
          json[i].media = 'https://png.pngitem.com/pimgs/s/287-2876527_uncle-mike-s-qd115-ns-circle-hd-png.png';
        }
          card.innerHTML += 
           `
                  <div class="col-md-12 col-lg-4 mb-4 mb-lg-0">
                    <div class="card shadow-lg p-3 mb-5 bg-body rounded">
                      <div class="d-flex justify-content-between p-3">
                        <p class="lead mb-0" style= "color: red;">${created} </p>
                      </div>
                    <div class="image-style">
                      <img src="${json[i].media}"
                        class="card-img-top image-listing" />
                    </div>
                      <div class="card-body">
                        <div class="d-flex justify-content-between">
                          <p class="small">${json[i].title}</p>
                        </div>
            
                        <div class="d-flex justify-content-between mb-3">
                          <h5 class="mb-0">${json[i].description}</h5
                        </div>
                        <a href="specific.html?id=${json[i].id}"><button type="button" class="btn btn-primary">View Listing</button></a>
                      </div>
                    </div>
                  </div>
                      `
                    
      
      }
        

    } catch (error){
      console.log(error);
    }
  

}

carouselListings();





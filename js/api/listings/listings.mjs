import { API_PATH_URL } from "../constants/url.mjs";

const listingsContainer = document.querySelector(".content-container");
const listings =
  "/listings?_active=true&sort=created&sortOrder=desc&_seller=true";

export async function getPosts() {
  const renderUrl = `${API_PATH_URL}${listings}`;

  const response = await fetch(renderUrl);
  const json = await response.json();
  console.log(json);

  /**
   * User can search the array filtering the posts.
   * @param {string} listings
   */

  function searchFeed(json) {
    const searchInput = document.querySelector("#search");

    searchInput.onkeyup = function (event) {
      const filterValue = event.target.value.trim().toLowerCase();
      console.log("event", event);

      const filteredFeed = json.filter(function (listing) {
        if (
          listing.title.toLowerCase().includes(filterValue) ||
          listing.description?.toLowerCase().includes(filterValue)
        ) {
          return true;
        }
      });

      listingsContainer.innerHTML = " ";

      console.log(filteredFeed);
      for (let i = 0; i < filteredFeed.length; i++) {
        const date = new Date(filteredFeed[i].endsAt);
        const created = date.toDateString();
        listingsContainer.innerHTML += `
        <div class="col-md-12 col-lg-4 mb-4 mb-lg-0">
                    <div class="card shadow-lg p-3 mb-5 bg-body rounded">
                      <div class="d-flex justify-content-between p-3">
                        <p class="lead mb-0" style= "color: red;">${created} </p>
                      </div>
                    <div class="image-style">
                      <img src="${filteredFeed[i].media}"
                        class="card-img-top image-listing" />
                    </div>
                      <div class="card-body">
                        <div class="d-flex justify-content-between">
                          <p class="small">${filteredFeed[i].title}</p>
                        </div>
                        <a href="specific.html?id=${filteredFeed[i].id}"><button type="button" class="btn btn-primary">View Listing</button></a>
                      </div>
                    </div>
                  </div>
                      `;
      }
    };
  }
  searchFeed(json);

  try {
    listingsContainer.innerHTML = " ";

    for (let i = 0; i < json.length; i++) {
      const date = new Date(json[i].endsAt);
      const created = date.toDateString();
      if (json[i].media.length === 0) {
        json[i].media =
          "https://png.pngitem.com/pimgs/s/287-2876527_uncle-mike-s-qd115-ns-circle-hd-png.png";
      } else if (json[i].media.status == 403) {
        json[i].media =
          "https://png.pngitem.com/pimgs/s/287-2876527_uncle-mike-s-qd115-ns-circle-hd-png.png";
      }
      listingsContainer.innerHTML += `
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
                        <a href="specific.html?id=${json[i].id}"><button type="button" class="btn btn-primary">View Listing</button></a>
                      </div>
                    </div>
                  </div>
                      `;
    }
  } catch (error) {
    console.log(error);
  }
}

getPosts();

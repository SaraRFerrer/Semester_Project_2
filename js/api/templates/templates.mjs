



export async function listingTemplate(postData){
    const listingsContainer = document.querySelector(".listings-container");

    listingsContainer.innerHTML = "";
    for(let i = 0; i < postData.length; i++) {

        const listings = postData[i];

        listingsContainer.innerHTML +=  `
        <div style="background-color: #eee;">
            <div class="container py-5">
              <div class="row">
                <div class="col-md-12 col-lg-4 mb-4 mb-lg-0">
                  <div class="card">
                    <div class="d-flex justify-content-between p-3">
                      <p class="lead mb-0">${listings.author.name}</p>
                      <div
                        class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                        style="width: 35px; height: 35px;">
                        <p class="text-white mb-0 small">x4</p>
                      </div>
                    </div>
                    <img src="${listings.media}"
                      class="card-img-top" alt="Laptop" />
                    <div class="card-body">
                      <div class="d-flex justify-content-between">
                        <p class="small"><a href="#!" class="text-muted">${listings.title}</a></p>
                        <p class="small text-danger"><s>$1099</s></p>
                      </div>
          
                      <div class="d-flex justify-content-between mb-3">
                        <h5 class="mb-0">${listings.description}</h5
                      </div>
                    </div>
                  </div>
                </div>
        </div`
    
    }
}




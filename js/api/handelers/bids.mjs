import { addBid } from "../listings/bid.mjs";

export function addBidListener (id, amount){
    const form = document.querySelector("#bid-form");
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    let id = params.get("id");

    if(form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
      
            const bid = event.target.amount.value; 
      
      
            addBid(id, Number(bid)); 
            
            //location.reload();
          });
        }
}

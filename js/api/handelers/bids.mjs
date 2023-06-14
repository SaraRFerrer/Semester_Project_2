import { addBid } from "../listings/bid.mjs";

export function addBidListener() {
  const form = document.querySelector("#bid-form");

  if (form) {
    form.addEventListener("submit", handleSubmit);
  }
}

function handleSubmit(e) {
  e.preventDefault();
  console.log(e);

  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  let id = params.get("id");

  const bid = e.target.amount.value;
  addBid(id, Number(bid));

  setTimeout(() => {
    location.reload();
  }, 3000);
}

addBidListener();

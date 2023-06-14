import { createListing } from "../listings/createListing.mjs";

const form = document.querySelector(".createForm");

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const form = event.target;
    const formObject = new FormData(form);
    const postData = Object.fromEntries(formObject.entries());
    console.log(postData);
    const { title, description, tags, day, month, year, media } = postData;

    const endsAt = new Date(day + "/" + month + "/" + year).toString();

    try {
      await createListing(title, description, [media], [tags], endsAt);
      alert("Listing created successfully!");
      form.reset();
    } catch (error) {
      console.log(error);
      alert("An error occurred. Listing creation failed.");
    }
  });
}

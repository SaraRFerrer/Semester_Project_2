import { createListing } from "../listings/createListing.mjs";



const form = document.querySelector(".createForm");
if (form) {
    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const form = event.target;
        const formObject = new FormData(form);
        const postData = Object.fromEntries(formObject.entries());
        console.log(postData);
        const { title, description, tags, endsAt, media } = postData;

        await createListing(title, description, [media], [tags], endsAt);
        
    });
}


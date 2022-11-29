import { createListing } from "../listings/createListing.mjs";


export function createListener() {
    const form = document.querySelector(".createForm");



  

    if (form) {
        form.addEventListener("submit", event => {
            event.preventDefault();

            const form = event.target;
            const formData = new FormData(form);
            const postData = Object.fromEntries(formData.entries());
            console.log(postData);

            const { title, description, media, tags, endsAt } = postData;

            createListing(title, description, [media], [tags], endsAt);
        });
    }
}

const path = location.pathname;

if (path === "/profile.html") {
    createListener();
}
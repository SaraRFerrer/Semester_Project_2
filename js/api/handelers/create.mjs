import { createListing } from "../listings/createListing.mjs";

const endDay = document.querySelector("#end-date");
const endMonth = document.querySelector("#end-month");
const endYear = document.querySelector("#end-year");
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

        await createListing(title, description, [media], [tags], endsAt);
        
    });
}


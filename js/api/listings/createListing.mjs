import { API_PATH_URL } from "../constants/url.mjs";
import { fetchToken } from "../constants/fetch.mjs";

/**
 * Sends a POST request to the API to create a new listing
 *  @param {string} title user has chosen for their item
 * @param {string} description user has chosen for their item
 * @param {array} tags array of strings
 * @param {array} media array of media urls
 * @param {date} date end date
 */

const action ="/listings";
const method = "post";



export async function createListing({ title, description, media: [media], tags: [tags], endsAt }) {
    const createUrl = API_PATH_URL + action;
    

    const response = await fetchToken (createUrl, {
        method,
        body: JSON.stringify({ title, description, media: [media], tags: [tags], endsAt })
    })

    const newListing = await response.json()
    console.log(newListing)

}

createListing()
    
import { API_PATH_URL } from "../constants/url.mjs";
import { fetchToken } from "../constants/fetch.mjs";


const action ="/listings";
const method = "post";



export async function createListing(postData) {
    const createUrl = API_PATH_URL + action;
    

    const response = await fetchToken (createUrl, {
        method,
        body: JSON.stringify(postData)
    })

    const newListing = await response.json()
    console.log(newListing)

}

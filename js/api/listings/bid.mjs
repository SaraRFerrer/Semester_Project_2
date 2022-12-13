import { API_PATH_URL } from "../constants/url.mjs";
import { fetchToken } from "../constants/fetch.mjs";
import { saved } from "../constants/stored.mjs";

/**
 * Function sending a POST request to API to post a BID on a listing
 */

const action = "/listings";
const method = "POST";

export async function addBid (id, amount) {
    const bidURL = `${API_PATH_URL}${action}/${id}/bids`;

    const response = await fetchToken(bidURL, {
        method,
        body: JSON.stringify({ amount: amount})
    });

    const { user } = await response.json()

    if (response.ok) {
        saved("profile", user)
        return await response.json()
    }

    throw new Error(response);
}
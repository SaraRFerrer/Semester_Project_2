import { API_BASE_URL } from "../constants/url.mjs";



/**
 * Gets a users profile data
 * @param {String} username name of profile
 * @returns {Object} with users profile data
 */
 export async function getProfile(username) {
    const url = `${API_BASE_URL}profiles/${username}?_listings=true`;
  
    const myHeaders = createAuthHeader();
  
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
    };
  
    const response = await fetch(url, requestOptions);
    if (response.ok) {
      return await response.json();
    }
  
    throw new Error(response);
  }


  
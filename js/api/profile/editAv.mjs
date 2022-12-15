import { load } from "../constants/stored.mjs";
import { fetchToken } from "../constants/fetch.mjs";
import { API_PATH_URL } from "../constants/url.mjs";

const action = "/profiles";
const method = "PUT";

/**
 * Function to update users Avatar information
 * @param {string} userData
 * @returns
 */

export async function editAvatar(userData) {
  const { name } = load("profile");

  if(!name) {
    throw new Error ("Request requires user's name");
  }

  const updateURL = `${API_PATH_URL}${action}/${name}/media`;

  const response = await fetchToken (updateURL, {
    method,
    body: JSON.stringify(userData)
  });

  return await response.json();
}


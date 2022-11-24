import { API_PATH_URL } from "../constants/url.mjs";
import { fetchToken } from "../constants/fetch.mjs";

const listings = "/listings";

export async function getPosts() {
    const renderUrl =
      `${API_PATH_URL}${listings}` + '?_author=true&_comments=true&limit=100';
  
    const response = await fetchToken(renderUrl);
    const json = await response.json();
    console.log(json);

}

getPosts();

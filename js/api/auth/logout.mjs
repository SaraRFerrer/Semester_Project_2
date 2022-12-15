import { remove } from "../constants/stored.mjs";

/**
 * Function to remove objects from LocalStorage
 */

function logout() {
    const LOGOUT = document.querySelector(".logout");

    LOGOUT.addEventListener("click", () => {
        remove("accessToken");
        remove("credits");
        remove("profile");
        remove("avatar");
        window.location.assign("index.html");
    });
}

logout();

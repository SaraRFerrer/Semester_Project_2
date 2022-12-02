import { remove } from "../constants/stored.mjs";

function logout() {
    const LOGOUT = document.querySelector(".logout");

    LOGOUT.addEventListener("click", () => {
        remove("accessToken");
        remove("credits");
        remove("profile");
        window.location.assign("index.html");
    });
}

logout();

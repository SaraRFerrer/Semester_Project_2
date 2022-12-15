import { load, saved } from "../constants/stored.mjs";
import { editAvatar } from "../profile/editAv.mjs";
import { getProfile } from "../profile/profile.mjs";

/**
 * Edit Avatar functionality
 */


export async function editAvListener () {
    const form = document.querySelector("#editAvForm");
    const media = document.querySelector("#avatar-media");

    if(form){

        const { name } = load("profile");
        const avatar = load("avatar");

        media.src = avatar;

        const profile = await getProfile(name);

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form)
            const avatar = Object.fromEntries(formData.entries())
            saved("avatar", form.avatar.value);

            editAvatar(avatar)
            location.reload();
        })
    }
}

const path = location.pathname;

if (path === '/profile.html') {
    editAvListener();

}
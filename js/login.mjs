
import { login } from "./api/auth/login.mjs";

export function setLoginFormListener() {
    const form = document.querySelector("#loginForm");

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const profile = Object.fromEntries(formData.entries());
            login(profile);
            console.log("Profile being sent to API:", profile);
        });
    
}

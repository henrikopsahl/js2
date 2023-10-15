
import { API_SOCIAL_URL } from "../constants.mjs";

const action = "/auth/register";
const method = "post";

export async function register(profile) {
    const registerUrl = API_SOCIAL_URL + action;
    const body = JSON.stringify(profile);

    const response = await fetch(registerUrl, {
        headers: {
            "content-type": "application/json"
        }, 
        method, 
        body
    })

    const result = await response.json()
    return result;

    localStorage.setItem("token", result.accessToken);

}
import { load } from "../constants/stored.mjs";

export function headers() {
    const accessToken = load("accessToken")
    
   
    
    return {
        "Content-Type": "application/json; charset=UTF-8",
       "Authorization": `Bearer ${accessToken}`
    }
};



export async function fetchToken (url, options) {
    return fetch (url, {
        ...options,
        headers: headers()
    }) 
};
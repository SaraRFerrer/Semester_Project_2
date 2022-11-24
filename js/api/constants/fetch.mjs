



export async function fetchToken (url, options) {
    return fetch (url, {
        ...options,
        headers: headers()
    }) 
};
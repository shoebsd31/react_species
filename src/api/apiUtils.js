export async function handleResponse(response) {
    if (response.ok) {
        console.log("response from api",response);
        return response.json();
    };
    if (response.status === 400) {
        // So, a server-side validation error occurred.
        // Server side validation returns a string error message, so parse as text instead of json.
        const error = await response.text();
        throw new Error(error);
    }
    throw new Error("Network response was not ok.");
}

// In a real app, would likely call an error logging service.
export function handleError(error) {
    // eslint-disable-next-line no-console
    console.error("API call failed. " + error);
    throw error;
}

export const apiUrl = "http://apiv3.iucnredlist.org/api/v3/";
export const apiToken = "9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee";
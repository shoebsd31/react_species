import { handleResponse, handleError, apiUrl,apiToken } from "./apiUtils";


export function getRegions() {
  return fetch(`${apiUrl}region/list?token=${apiToken}`)
    .then(handleResponse)
    .catch(handleError);
}


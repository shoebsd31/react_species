import { handleResponse, handleError, apiUrl,apiToken } from "./apiUtils";


export function getSpecies(region) {
  return fetch(`${apiUrl}species/region/${region}/page/0?token=${apiToken}`)
    .then(handleResponse)
    .catch(handleError);
}


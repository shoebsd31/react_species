import { handleResponse, handleError, apiUrl,apiToken } from "./apiUtils";


export function getConservationMeasures(speciesName) {
  return fetch(`${apiUrl}measures/species/name/${speciesName}?token=${apiToken}`)
    .then(handleResponse)
    .catch(handleError);
}


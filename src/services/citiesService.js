import apiRequest from "./apiRequest";

async function getCities() {
  return apiRequest.makeGetRequest("/cities/");
}

async function createCity(city) {
  return apiRequest.makePostRequest("/cities/", city);
}

async function removeCity(cityId) {
  return apiRequest.makeDeleteRequest(`/cities/${cityId}`);
}

async function updateCity(cityId, city) {
  return apiRequest.makePutRequest(`/cities/${cityId}`, city);
}

const citiesService = {
  getCities,
  createCity,
  removeCity,
  updateCity,
};

export default citiesService;

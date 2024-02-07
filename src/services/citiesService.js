import apiRequest from "./apiRequest";

async function getCities() {
  return apiRequest.fetchData("/cities/");
}

async function createCity(city) {
  return apiRequest.createData("/cities/", city);
}

async function removeCity(cityId) {
  return apiRequest.deleteData(`/cities/${cityId}`);
}

async function updateCity(cityId, city) {
  return apiRequest.updateData(`/cities/${cityId}`, city);
}

const citiesService = {
  getCities,
  createCity,
  removeCity,
  updateCity,
};

export default citiesService;

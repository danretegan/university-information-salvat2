import axios from "axios";

axios.defaults.baseURL = "http://localhost:5173";

async function makeGetRequest(endpoint) {
  const response = await axios.get(endpoint);
  return response.data;
}

async function makePostRequest(endpoint, data) {
  const response = await axios.post(endpoint, data);
  return response.data;
}

async function makeDeleteRequest(endpoint) {
  const response = await axios.delete(endpoint);
  return response.data;
}

async function makePutRequest(endpoint, data) {
  const response = await axios.put(endpoint, data);
  return response.data;
}

const apiRequest = {
  makeGetRequest,
  makePostRequest,
  makeDeleteRequest,
  makePutRequest,
};

export default apiRequest;

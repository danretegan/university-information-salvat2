import axios from "axios";
import setAxiosDefaults from "./setAxiosDefaults";

setAxiosDefaults();

async function fetchData(endpoint) {
  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    // Tratează erorile sau aruncă o excepție pentru a le gestiona în altă parte
    console.error("Error fetching data:", error);
    throw error.response?.data || error;
  }
}

async function createData(endpoint, data) {
  try {
    const response = await axios.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("Error creating data:", error);
    throw error.response?.data || error;
  }
}

async function updateData(endpoint, data) {
  try {
    const response = await axios.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error.response?.data || error;
  }
}

async function deleteData(endpoint) {
  try {
    const response = await axios.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error deleting data:", error);
    throw error.response?.data || error;
  }
}

const apiRequest = {
  fetchData,
  createData,
  updateData,
  deleteData,
};

export default apiRequest;

import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/";

async function login(payload) {
  try {
    const response = await axios.post("/login", payload);
    console.dir(response.data);
    return response;
  } catch (error) {
    console.error("Autentificare eșuată:", error.message);
    throw error;
  }
}

async function register(payload) {
  try {
    const response = await axios.post("/register", payload);
    console.dir(response.data);
    return response;
  } catch (error) {
    console.error("Înregistrarea a eșuat:", error.message);

    throw error;
  }
}

async function logout() {
  localStorage.removeItem("token");
}

const authService = {
  login,
  register,
  logout,
};

export default authService;

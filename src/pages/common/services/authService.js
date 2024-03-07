import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/";

async function login(payload) {
  try {
    console.log("Attempting login with payload:", payload);
    const response = await axios.post("/login", payload);
    console.log("Login successful. Response data:", response.data);
    return response;
  } catch (error) {
    console.error("Login failed:", error.message);
    throw error;
  }
}

async function register(payload) {
  try {
    console.log("Attempting registration with payload:", payload);
    const response = await axios.post("/register", payload);
    console.log("Registration successful. Response data:", response.data);
    return response;
  } catch (error) {
    console.error("Registration failed:", error.message);
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

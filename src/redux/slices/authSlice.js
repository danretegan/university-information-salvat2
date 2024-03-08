import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "../../pages/common/services/authService";

// initialize userToken from local storage (not recommended!):
const userToken = localStorage.getItem("token")
  ? localStorage.getItem("token")
  : null;

const initialState = {
  isAuthenticated: false,
  status: "idle",
  loading: false,
  email: null,
  userToken,
  error: null,
  success: false,
};

export const loginUser = createAsyncThunk("auth/login", async (payload) => {
  try {
    console.log("Attempting login...");
    const { data } = await authService.login(payload);
    localStorage.setItem("token", data.accessToken);
    console.log("Login successful. User data:", data.user);
    return data;
  } catch (error) {
    console.error("Login failed:", error.message);
    throw error;
  }
});

export const registerUser = createAsyncThunk(
  "auth/register",
  async (payload) => {
    try {
      console.log("Attempting registration...");
      const { data } = await authService.register(payload);
      localStorage.setItem("token", data.accessToken);
      console.log("Registration successful. User data:", data.user);
      return data;
    } catch (error) {
      console.error("Registration failed:", error.message);
      throw error;
    }
  }
);

export const logoutUser = createAsyncThunk("auth/logout", async () => {
  try {
    console.log("Attempting logout...");
    await authService.logout();
    console.log("Logout successful.");
  } catch (error) {
    console.error("Logout failed:", error.message);
    throw error;
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // loginUser:
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.loading = true;
        state.error = null;
        state.isAuthenticated = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.loading = false;
        state.isAuthenticated = true;
        state.email = action.payload.user.email;
        state.userToken = action.payload.accessToken;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.error.message;
      })

      // registerUser:
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
        state.loading = true;
        state.error = null;
        state.isAuthenticated = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.loading = false;
        state.isAuthenticated = true;
        state.email = action.payload.user.email;
        state.userToken = action.payload.accessToken;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.error.message;
      })

      // logoutUser:
      .addCase(logoutUser.pending, (state) => {
        state.status = "loading";
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.status = "succeeded";
        state.loading = false;
        state.isAuthenticated = false;
        state.email = null;
        state.userToken = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.status = "failed";
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const authReducer = authSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import tutorsService from "../../pages/common/services/tutorsService";

const initialState = {
  status: "idle",
  error: "",
  items: [], 
};

export const fetchTutors = createAsyncThunk("tutors/fetchTutors", async () => {
  const result = await tutorsService.getTutors();
  
  return result;
});

export const addTutor = createAsyncThunk(
  "tutors/addTutor",
  async (initialPost) => {
    const response = await tutorsService.createTutor(initialPost); 

    return response;
  }
);

const tutorsSlice = createSlice({
  name: "tutors",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder

      // GET:
      .addCase(fetchTutors.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTutors.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchTutors.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // CREATE:
      .addCase(addTutor.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

// Exportăm generatoarele de acțiuni și reducerul:
export const { editTutor, deleteTutor } = tutorsSlice.actions;
export const tutorsReducer = tutorsSlice.reducer;

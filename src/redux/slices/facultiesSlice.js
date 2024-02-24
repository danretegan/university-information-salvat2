import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      id: 1,
      name: "Faculty of Math",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      name: "Faculty of Informatics",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
  searchTerm: "",
};

const facultiesSlice = createSlice({
  name: "faculties",
  initialState: initialState,
  reducers: {
    addFaculty: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (item) => {
        return {
          payload: {
            id: nanoid(),
            ...item,
          },
        };
      },
    },
    editFaculty(state, action) {
      return state.map((item) => {
        if (item.id !== action.payload.id) {
          // Nu este item-ul care ne intereseaza! Returneaza item-ul asa cum este:
          return item;
        }
        // Altfel, acum va fi item-ul pe care il vrem! Returneaza item-ul updatat dupa cum urmeaza:
        return {
          ...item,
          ...action.payload,
        };
      });
    },
    deleteFaculty(state, action) {
      return state.filter((el) => el.id !== action.payload);
    },
  },
});

// Exportam generatoarele de actiuni si reducerul:
export const { addFaculty, editFaculty, deleteFaculty } =
  facultiesSlice.actions;
export const facultiesReducer = facultiesSlice.reducer;

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 2,
    name: "San Francisco",
  },
];

const citiesSlice = createSlice({
  name: "cities",
  initialState: initialState,
  reducers: {
    addCity: {
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
    editCity(state, action) {
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
    deleteCity(state, action) {
      return state.filter((el) => el.id !== action.payload);
    },
  },
});

// Exportam generatoarele de actiuni si reducerul:
export const { addCity, editCity, deleteCity } = citiesSlice.actions;
export const citiesReducer = citiesSlice.reducer;

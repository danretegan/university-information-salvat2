import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    firstName: "Dan",
    lastName: "Retegan",
    telephone: "+40.753.023.616",
    email: "danretegan@yahoo.com",
    city: "London",
    role: "Web Developer",
  },
];

const tutorsSlice = createSlice({
  name: "tutors",
  initialState: initialState,
  reducers: {
    addTutor: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (item) => {
        return {
          payload: {
            id: nanoid(),
            role: "member",
            ...item,
          },
        };
      },
    },
    editTutor(state, action) {
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
    deleteTutor(state, action) {
      return state.filter((el) => el.id !== action.payload);
    },
  },
});

// Exportam generatoarele de actiuni si reducerul:
export const { addTutor, editTutor, deleteTutor } = tutorsSlice.actions;
export const tutorsReducer = tutorsSlice.reducer;

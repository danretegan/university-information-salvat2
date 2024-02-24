import { configureStore } from "@reduxjs/toolkit";
import { citiesReducer } from "./slices/citiesSlice";
import { facultiesSearchTermReducer } from "./slices/facultiesSearchTermSlice";
import { facultiesReducer } from "./slices/facultiesSlice";
import { tutorsReducer } from "./slices/tutorsSlice";

/**
 * In store, pentru fiecare "particica" din state-ul aplicatiei, o sa asignam un reducer care se va ocupa exclusiv de logica pentru acea "particica".
 *
 * Obiectul de state va fi:
 * {
 * cities: [...lista de orase],
 * faculties: [...lista de facultati],
 * tutors: [lista de tutori],
 * facultiesSearchTerm: "",
 * }
 */

const store = configureStore({
  reducer: {
    cities: citiesReducer,
    facultiesSearchTerm: facultiesSearchTermReducer,
    faculties: facultiesReducer,
    tutors: tutorsReducer,
  },
});

export default store;

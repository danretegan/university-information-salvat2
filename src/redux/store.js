import { configureStore } from "@reduxjs/toolkit";

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
  reducer: {},
});

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { citiesReducer } from "./slices/citiesSlice";
import { facultiesSearchTermReducer } from "./slices/facultiesSearchTermSlice";
import { facultiesReducer } from "./slices/facultiesSlice";
import { tutorsReducer } from "./slices/tutorsSlice";
import { tutorsFilterReducer } from "./slices/tutorsFilterSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { authReducer } from "./slices/authSlice";

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

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
  cities: citiesReducer,
  faculties: facultiesReducer,
  facultiesSearchTerm: facultiesSearchTermReducer,
  tutors: tutorsReducer,
  tutorsFilter: tutorsFilterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { facultiesReducer } from "./reducers/facultiesReducer";

export const rootReducer = combineReducers({
  faculties: facultiesReducer,
});

// const rootReducer = (state, action) => {
//     switch (action.type) {
//       // In functie de tipul actiunii, se va executa o logica diferita:
//       case "faculties/setSearchTerm":
//         return {
//           ...state,
//           faculties: {
//             ...state.faculties,
//             serchTerm: action.payload,
//           },
//         };
//       default:
//         return state;
//     }
// };

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);

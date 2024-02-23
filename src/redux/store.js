import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

const rootReducer = (state, action) => {
  return state;
};

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);

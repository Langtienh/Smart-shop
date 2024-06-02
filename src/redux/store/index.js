import { combineReducers } from "redux";
import crudCartReducer from "./crudCartReducer";

export const allReducer = combineReducers({
  cart: crudCartReducer,
});

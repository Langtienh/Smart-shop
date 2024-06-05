import { combineReducers } from "redux";
import crudCartReducer from "./crudCartReducer";
import invoiceReducer from "./invoiceReducer";

export const allReducer = combineReducers({
  cart: crudCartReducer,
  invoice: invoiceReducer,
});

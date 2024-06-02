import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import AllRoute from "./routes/AllRoute";
import { createStore } from "redux";
import { allReducer } from "./redux/store/index";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = createStore(allReducer);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <AllRoute />
    </BrowserRouter>
  </Provider>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Add from "./pages/add";
import { Provider } from "react-redux";
import Store from "./services/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
    <React.StrictMode>
      <Add />
    </React.StrictMode>
  </Provider>
);

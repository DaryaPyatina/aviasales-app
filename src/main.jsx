import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.jsx";
import { store } from "./store";
import { Provider } from "react-redux";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import rootReducer from "./reducers/index";
import { Provider } from "react-redux";
import "./index.css";
import App from "./components/App/App";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

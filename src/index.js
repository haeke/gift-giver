import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers/index";
import { Provider } from "react-redux";
import "./index.css";
import App from "./components/App/App";

const middleware = [thunk, logger];

const store = createStore(rootReducer, applyMiddleware(...middleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

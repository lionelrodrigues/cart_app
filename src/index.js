import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
// import rootreducer from "../src/Redux/Reducers/Rootreducer";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { cartReducer } from "./Redux/Reducers/cartReducer";
const store = createStore(
  cartReducer,
  composeWithDevTools(applyMiddleware(logger))
);
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,

  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import App from "./components/App/App";
import { store } from './store/createStore';

import setAuthorizationToken from './utils/setAuthorizationToken';

if (localStorage.jwt) {
  setAuthorizationToken(localStorage.jwt);
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
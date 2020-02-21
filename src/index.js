import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import App from "./components/App";
import { store } from './store';

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
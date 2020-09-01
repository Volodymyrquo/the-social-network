import React from 'react';
import * as serviceWorker from "./serviceWorker";
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';


    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
        <Provider store={store}>
        <App />
        </Provider>
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById("root")
    );

serviceWorker.unregister();

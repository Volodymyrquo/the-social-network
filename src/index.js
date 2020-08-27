import React from 'react';
import * as serviceWorker from "./serviceWorker";
import store from "./redux/store";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";


const rerenderEntireTree = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <App state={state} dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById("root")
    );
  }
rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

serviceWorker.unregister();

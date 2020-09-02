import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import Settings from "./components/settings/Settings";
import News from "./components/news/News";
import Musik from "./components/musik/Musik";
import { Route } from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";

function App(props) {
  return (
    <div>
      <Header />

      <Route
        path="/profile"
        render={() => (<Profile   />)}
      />
      <Route
        path="/dialogs"
        render={() => <DialogsContainer  />}
      />
      <Route path="/news" render={() => <News />} />
      <Route path="/musik" render={() => <Musik />} />
      <Route path="/users" render={() => <UsersContainer />} />
      <Route path="/settings" render={() => <Settings />} />
    </div>
  );
}

export default App;

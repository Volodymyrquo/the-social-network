import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import Settings from "./components/settings/Settings";
import News from "./components/news/News";
import Musik from "./components/musik/Musik";
import Users from "./components/users/Users";
import { Route } from "react-router-dom";

function App(props) {
  return (
    <div>
      <Header />

      <Route
        path="/profile"
        render={() => (
          <Profile
            profilePage={props.state.profilePage}
            dispatch={props.dispatch}
            
          />
        )}
      />
      <Route
        path="/dialogs"
        render={() => <Dialogs state={props.state.dialogsPage} />}
      />
      <Route path="/news" render={() => <News />} />
      <Route path="/musik" render={() => <Musik />} />
      <Route path="/users" render={() => <Users />} />
      <Route path="/settings" render={() => <Settings />} />
    </div>
  );
}

export default App;

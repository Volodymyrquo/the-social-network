import React from "react";
import "./App.css";
import Settings from "./components/settings/Settings";
import News from "./components/news/News";
import Musik from "./components/musik/Musik";
import { Route, withRouter } from "react-router-dom";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";
import ProfileContainer from "./components/profile/ProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/Login";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import { compose } from "redux";
import Preloader from "./components/common/preloader/Preloader";
import UsersWithHooks from "./components/users/UsersWithHooks";
import Movies from "./components/movies/Movies";
import MovieProfile from "./components/movies/movieProfile/MovieProfile";


class App extends React.Component {
  componentDidMount() {
    
    this.props.initializeApp();
  }

  render() {
   
    if (!this.props.initialized) {
      return <Preloader />;
    }

    return (
     
      <div>
        <HeaderContainer />

        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
        <Route path="/movieProfile/:movieId?" render={() => <MovieProfile />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/movies" render={() => <Movies />} />
        <Route path="/musik" render={() => <Musik />} />
        <Route path="/users" render={() => <UsersWithHooks />} />
        <Route path="/settings" render={() => <Settings />} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

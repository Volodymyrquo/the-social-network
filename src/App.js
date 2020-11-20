import React from 'react';
import './App.css';
import Settings from './components/settings/Settings';
import News from './components/news/News';
import Musik from './components/musik/Musik';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import HeaderContainer from './components/header/HeaderContainer';
import Login from './components/login/Login';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux';
import Preloader from './components/common/preloader/Preloader';
import UsersWithHooks from './components/users/UsersWithHooks';
import Movies from './components/movies/Movies';
import MovieProfile from './components/movies/movieProfile/MovieProfile';
import store from './redux/redux-store';
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = React.lazy(() =>
  import('./components/dialogs/DialogsContainer')
);
const ProfileContainer = React.lazy(() =>
  import('./components/profile/ProfileContainer')
);

class StartApp extends React.Component {
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

        <Route
          path='/profile/:userId?'
          render={withSuspense(ProfileContainer)}
        />
        <Route path='/movieProfile/:movieId?' render={() => <MovieProfile />} />
        <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
        <Route path='/login' render={() => <Login />} />
        <Route path='/news' render={() => <News />} />
        <Route path='/movies' render={() => <Movies />} />
        <Route path='/musik' render={() => <Musik />} />
        <Route path='/users' render={() => <UsersWithHooks />} />
        <Route path='/settings' render={() => <Settings />} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

const NextApp = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(StartApp);

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <NextApp />
      </Provider>
    </BrowserRouter>
  );
};

export default App;

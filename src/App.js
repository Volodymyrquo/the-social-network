import React from 'react';
import './App.css';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Musik from './components/Musik/Musik';
import {
  BrowserRouter,
  Route,
  withRouter,
} from './components/Header/node_modules/react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {
  connect,
  Provider,
} from './components/Dialogs/node_modules/react-redux';
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux';
import Preloader from './components/common/preloader/Preloader';
import UsersWithHooks from './components/Users/UsersWithHooks';
import Movies from './components/Movies/Movies';
import MovieProfile from './components/Movies/movieProfile/MovieProfile';
import store from './redux/redux-store';
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = React.lazy(() =>
  import('./components/Dialogs/DialogsContainer')
);
const ProfileContainer = React.lazy(() =>
  import('./components/Profile/ProfileContainer')
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

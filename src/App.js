import React from 'react';
import './App.css';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import { compose } from 'redux';
import Preloader from './components/common/preloader/Preloader';
import MovieProfile from './components/Movies/MovieProfile/MovieProfile';
import store from './redux/redux-store';
import { withSuspense } from './hoc/withSuspense';
import {
  Login,
  Header,
  News,
  Movies,
  Musik,
  Users,
  Settings,
  Profile,
} from './components';

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
        <Header />

        <Route path='/profile/:userId?' render={() => <Profile />} />
        <Route
          path='/movieProfile/:movieId?'
          render={withSuspense(ProfileContainer)}
        />
        <Route path='/dialogs' render={withSuspense(DialogsContainer)} />
        <Route path='/login' render={() => <Login />} />
        <Route path='/news' render={() => <News />} />
        <Route path='/movies' render={() => <Movies />} />
        <Route path='/musik' render={() => <Musik />} />
        <Route path='/users' render={() => <Users />} />
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

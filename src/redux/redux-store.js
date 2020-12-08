import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import profileReducer from './profile-reducer';
import dialodsReducer from './dialogs-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from './app-reducer';
import newsReducer from './news-reducer';
import moviesReducer from './movies-reducer';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialodsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
  newsPage: newsReducer,
  moviesPage: moviesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(compose(applyMiddleware(thunk)))
);

export default store;

window._store_ = store;

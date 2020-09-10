import {createStore, combineReducers, applyMiddleware} from 'redux';
import profileReducer from './profile-reducer';
import dialodsReducer from './dialogs-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'


const reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialodsReducer,
    usersPage:usersReducer,
    auth: authReducer,
    form: formReducer
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;

window.store = store;
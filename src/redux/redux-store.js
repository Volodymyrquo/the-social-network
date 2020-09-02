import {createStore, combineReducers} from 'redux';
import profileReducer from './profile-reducer';
import dialodsReducer from './dialogs-reducer';
import usersReducer from './users-reducer';



const reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialodsReducer,
    usersPage:usersReducer
})

const store = createStore(reducers);

export default store;
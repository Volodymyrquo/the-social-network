import {createStore, combineReducers} from 'redux';
import profileReducer from './profile-reducer';
import dialodsReducer from './dialogs-reducer';



const reducers = combineReducers({
    profilePage:profileReducer,
    dialogsPage:dialodsReducer
})

const store = createStore(reducers);

export default store;
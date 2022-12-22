

import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { ManageStudentReducer } from './Reducer/ManageStudentReducer';


const rootReducers = combineReducers({
    ManageStudentReducer
});


export const store = createStore(rootReducers, applyMiddleware(thunk));

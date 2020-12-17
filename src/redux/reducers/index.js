import { auth_reducer } from './Auth_reducer';
import {tab_reducer} from './Tab_reducer';
import { combineReducers } from 'redux';
const allreducers = combineReducers({
   auth_reducer , tab_reducer
});
export default allreducers;
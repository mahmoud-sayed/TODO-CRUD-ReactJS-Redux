import { combineReducers } from "redux";
import todoReducer from './todoReducer/reducer';

const reducers = combineReducers({ todoReducer });

export default reducers;
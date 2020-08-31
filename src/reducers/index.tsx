import counterReducer from "./counterReducer";
import getAllUser from './getAllUsers'
import {combineReducers} from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    users: getAllUser
})

export default allReducers
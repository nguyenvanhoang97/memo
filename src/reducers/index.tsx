import counterReducer from "./counterReducer";
import getAllUsers from "./getAllUsers";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    user: getAllUsers
})

export default allReducers
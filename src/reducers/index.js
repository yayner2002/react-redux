import counterReducer from "./counterReducer";
import isLoggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    count : counterReducer,
    isLogged : isLoggedReducer
})

export default  allReducers
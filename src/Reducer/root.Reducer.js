import {combineReducers} from "redux";
import loginReducer from "./login.reducer"
import contactReducer from "./contact.reducer"



const rootReducer = combineReducers({
    contact:contactReducer,
    login: loginReducer
});

export default rootReducer;

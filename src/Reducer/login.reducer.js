import {LOG_IN, LOGOUT, REGISTER} from "../action/login.action";


export default function loginReducer(state= false, action){
    switch(action.type){
        case LOG_IN:
            return action.payload.data
        case LOGOUT:
            return null
        case REGISTER:
            return action.payload.data
        default:
            return state
    }
}

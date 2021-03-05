import {GET_CONTACT, POST_CONTACT, DELETE_CONTACT, PUT_CONTACT} from "../action/contact.action";



export default function contactReducer(state= [], action){
    switch(action.type){
        case GET_CONTACT:
            return action.payload.data
        case POST_CONTACT:
            return [...action.payload.data]
        case DELETE_CONTACT:
            return [...action.payload.data]
        case PUT_CONTACT:          
            return [...action.payload.data]
        default:
            return state
    }
}
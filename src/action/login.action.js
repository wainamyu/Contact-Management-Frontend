import axios from 'axios';
import qs from 'qs';

export const LOG_IN = 'LOG_IN'
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER'


export function getLogin(user){
    const promise = axios.post('http://localhost:8080/login',qs.stringify(user),{withCredentials: true})
    return{
        type:LOG_IN,
        payload: promise
    }
}

export function logout() {
    const promise = axios.post('http://localhost:8080/logout', {withCredentials: true})
    return {
        type: LOGOUT,
        payload: promise
    }
}

export function register(user){
    const promise = axios.post('http://localhost:8080/User', user,{withCredentials: true})

    return{
        type: REGISTER,
        payload: promise
    }
}

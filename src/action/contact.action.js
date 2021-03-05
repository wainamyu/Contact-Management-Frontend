import axios from 'axios';

export const GET_CONTACT = 'GET_CONTACT';
export const POST_CONTACT = 'POST_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const PUT_CONTACT = 'PUT_CONTACT';

export function getContact(id){
    const promise = axios.get(`http://localhost:8080/Contact/${id}`);

    return{
        type:GET_CONTACT,
        payload: promise
    }
}

export function postContact(contact){
    const promise = axios.post('http://localhost:8080/Contact',contact);
    return{
        type:POST_CONTACT,
        payload: promise
    }
}

export function putContact(contact){
    const promise = axios.put('http://localhost:8080/Contact',contact);
    return{
        type:PUT_CONTACT,
        payload: promise
    }
}

export function deleteContact(id){
    const promise = axios.delete(`http://localhost:8080/Contact/${id}`);
    return{
        type:DELETE_CONTACT,
        payload: promise
    }
}
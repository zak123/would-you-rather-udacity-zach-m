import { saveUser } from '../util/api';
import { login } from './loggedInUser';


export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ADD_USER = 'ADD_USER';


export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

function addUser(user) {
    return {
        type: ADD_USER,
        user
    }
}

export function startAddUser(data) {
    return (dispatch) => {
        return saveUser(data).then((user) => {
            dispatch(addUser(user));
            dispatch(login(user.id));
        })
    }
}
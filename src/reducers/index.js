import { combineReducers } from 'redux';
import questions from './questions';
import users from './users';
import loggedInUser from './loggedInUser';

export default combineReducers({
    questions,
    users,
    loggedInUser,
})
import {ADD_USER, RECEIVE_USERS} from "../actions/users";
import {ADD_QUESTION, ANSWER_POLL} from "../actions/questions";

export default function users (state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users
            };
        case ANSWER_POLL :
            return {
                ...state,
                [action.loggedInUser]: {...state[action.loggedInUser],
                    answers: {...state[action.loggedInUser].answers,
                        [action.questionId]: action.answer
                    }
                }

            };
        case ADD_QUESTION :
            return {
                ...state,
                [action.question.author]: {...state[action.question.author],
                questions: state[action.question.author].questions.concat([action.question.id])
                }
            };
        case ADD_USER :
            return {
                ...state,
                [action.user.id]: action.user
            };


        default :
            return state
    }
}
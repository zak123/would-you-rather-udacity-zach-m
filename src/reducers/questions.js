import { RECEIVE_QUESTIONS, ADD_QUESTION, ANSWER_POLL } from "../actions/questions";

export default function questions (state = {}, action) {
    console.log('action' + action.type);
    switch(action.type) {
        case RECEIVE_QUESTIONS :
            console.log('testing');
            return {
                ...state,
                ...action.questions
            };
        case ADD_QUESTION :
            return {
                ...state,
                [action.question.id]: action.question,

            };
        case ANSWER_POLL :
            console.log(state);
            return {
                ...state,
                [action.questionId]: {...state[action.questionId],
                    [action.answer]: {...state[action.questionId][action.answer],
                        votes: state[action.questionId][action.answer].votes.concat([action.loggedInUser])
                    }
                }
            };

        default :
            return state
    }
}

//question
///id
///options
//question
///id
///options
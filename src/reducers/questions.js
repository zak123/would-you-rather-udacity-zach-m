import { RECEIVE_QUESTIONS, ADD_QUESTION, ANSWER_POLL } from "../actions/questions";

export default function questions (state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS :
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
            return {
                ...state,
                [action.questionId]: {
                    ...state[action.questionId],
                    [action.answer]: {
                        ...state[action.questionId][action.answer],
                        results: state[action.questionId][action.answer].results.concat([action.loggedInUser])

                    }
                }
            };

        default :
            return state
    }
}
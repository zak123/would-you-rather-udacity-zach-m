import { saveQuestion, saveQuestionAnswer} from "../util/api";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ANSWER_POLL = 'ANSWER_POLL';

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}



export function startAnswerPoll({user, questionId, answer}) {
    return {
        type: ANSWER_POLL,
        user,
        questionId,
        answer
    }
}

export function startAddQuestion(data) {
    return (dispatch, getState) => {
        const { select1, select2 } = data;
        const { loggedInUser } = getState();

        return saveQuestion({select1, select2, author: loggedInUser})
            .then((question) => dispatch(addQuestion(question)));

    }
}

export function startAddAnswer(questionId, answer) {
    return (getState, dispatch) => {
        const loggedInUser = { getState };

        dispatch(startAnswerPoll({loggedInUser, questionId, answer}));

        return saveQuestionAnswer({loggedInUser, questionId, answer}).catch((e) => {
            console.log('error?', e);
        })

    }
}

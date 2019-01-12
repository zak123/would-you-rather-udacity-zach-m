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



export function answerPoll({loggedInUser, questionId, answer}) {
    return {
        type: ANSWER_POLL,
        loggedInUser,
        questionId,
        answer
    }
}
export function startAddQuestion(select1, select2) {
    console.log(select1, select2);
    return (dispatch, getState) => {
        const { loggedInUser } = getState();
        return saveQuestion({select1, select2, author: loggedInUser})
            .then((question) => dispatch(addQuestion(question)));
    }
}
//export function _saveQuestionAnswer ({ authedUser, qid, answer }) {

export function startAddAnswer(questionId, answer) {
    return (dispatch, getState) => {
        const {loggedInUser} = getState();
        const data = {loggedInUser, questionId, answer};
        dispatch(answerPoll(data));

        return saveQuestionAnswer(data)
            .catch((e) => {
            console.error(e);
            })

    }
}

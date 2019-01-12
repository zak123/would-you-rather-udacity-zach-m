import { _getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer, _saveUser } from "./_DATA";


export function getInitialData () {
    return Promise.all([
        _getQuestions(),
        _getUsers(),
    ]).then(([questions, users]) => ({
        questions,
        users,
    }))
}

export function saveQuestion(data) {
    return _saveQuestion(data);
}

export function saveQuestionAnswer(data)    {
    return _saveQuestionAnswer(data);
}

export function saveUser(user)    {
    return _saveUser(user);
}
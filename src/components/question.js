import React, { Component } from 'react'
import {Panel, Button, Row} from 'react-bootstrap'
import { connect } from 'react-redux'

import { startAddAnswer } from "../actions/questions";

class Question extends Component {

     questionDetails = (id) => {
        this.props.history.push('/question/' + id);
     };

     startSubmit = (choice) => {
         console.log(this.props.users[this.props.loggedInUser].id);
        this.props.dispatch(startAddAnswer(this.props.questions[this.props.questionId].id, choice)).then(() => {
            console.log('success');
     })

     };


    render() {

        const question = this.props.questions[this.props.questionId];

        let selectedAnswer = '';
        console.log('prop update', question);
        if (question.optionOne.votes.includes(this.props.loggedInUser)) {
            selectedAnswer = question.optionOne.text;
        } else if (question.optionTwo.votes.includes(this.props.loggedInUser)) {
            selectedAnswer = question.optionTwo.text;
        }



        return (
            <Panel style={{margin: 10}}>
                <Panel.Heading>
                    Question from {question.author} - {question.timestamp}
                </Panel.Heading>
                <Panel.Body>
                    <div style={{margin: 10}}>
                    {
                        selectedAnswer.length > 0
                            ?
                            <div>
                                <h2>You answered: {selectedAnswer}</h2>
                            </div>
                            :
                            <div>
                                <h2>Would you rather...</h2>
                                <Button style={{margin: 5}} onClick={() => this.startSubmit('optionOne')}>
                                    {question.optionOne.text}
                                </Button>
                                <Button style={{margin: 5}} onClick={() => this.startSubmit('optionTwo')}>
                                    {question.optionTwo.text}
                                </Button>
                            </div>
                    }
                        <Button style={{margin: 5}} onClick={() => this.questionDetails(question.id)}>
                            More Details
                        </Button>
                    </div>


                </Panel.Body>
            </Panel>
        )
    }
}

function mapStateToProps({ questions, loggedInUser, users }) {



    return {
        questions: questions,
        loggedInUser: loggedInUser,
        users: users
    }
}

export default connect(mapStateToProps)(Question);


// "xj352vofupe1dqz9emx13r": {
//     id: 'xj352vofupe1dqz9emx13r',
//         author: 'johndoe',
//         timestamp: 1493579767190,
//         optionOne: {
//         votes: ['johndoe'],
//             text: 'write JavaScript',
//     },
//     optionTwo: {
//         votes: ['tylermcginnis'],
//             text: 'write Swift'
//     }
// },
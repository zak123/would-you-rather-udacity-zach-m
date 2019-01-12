import React, { Component } from 'react'
import {Panel, Button, Row} from 'react-bootstrap'
import { connect } from 'react-redux'

 class Question extends Component {

     questionDetails = (id) => {
        this.props.history.push('/question/' + id);
     };

     startSubmit = (choice) => {

     };


    render() {

        const question = this.props.questions[this.props.questionId];

        let selectedAnswer = '';

        if (this.props.answered) {
            if (question.optionOne.votes.includes(this.props.loggedInUser)) {
                selectedAnswer = question.optionOne.text;
            } else if (question.optionTwo.votes.includes(this.props.loggedInUser)) {
                selectedAnswer = question.optionTwo.text;
            }
        }




        return (
            <Panel style={{margin: 10}}>
                <Panel.Heading>
                    Question from {question.author} - {question.timestamp}
                </Panel.Heading>
                <Panel.Body>
                    <div style={{margin: 10}}>
                    {
                        this.props.answered
                            ?
                            <div>
                                <h2>You answered: {selectedAnswer}</h2>
                            </div>
                            :
                            <div>
                                <h2>Would you rather...</h2>
                                <Button style={{margin: 5}}>
                                    {question.optionOne.text}
                                </Button>
                                <Button style={{margin: 5}}>
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

function mapStateToProps({ questions, loggedInUser, }) {



    return {
        questions: questions,
        loggedInUser: loggedInUser
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
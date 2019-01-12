import React from 'react';
import { connect } from 'react-redux';
import Question from './question';
import { Panel, Media } from "react-bootstrap";


const QuestionDetails = (props) => {
    console.log(props.question);

    if (props.question === null ) {
        return (
            <h1>question doesnt exist</h1>
        )
    }

    const peoplePerson1 = props.question.optionOne.votes.length > 1 ? 'people' : 'person';
    const peoplePerson2 = props.question.optionTwo.votes.length > 1 ? 'people' : 'person';



    return (
        <Panel>
            <Panel.Heading>
                Would you rather
            </Panel.Heading>
            <Panel.Body>
                <Media>
                    <Media.Left>
                        <img width={64} height={64} src={props.author.avatarURL} alt="thumbnail" />
                    </Media.Left>
                    <Media.Body>
                        {props.question.optionOne.votes.includes(props.loggedInUser) || props.question.optionTwo.votes.includes(props.loggedInUser) ?
                            <h3>{props.question.optionOne.votes.length} {peoplePerson1} voted {props.question.optionOne.text} -- {props.question.optionTwo.votes.length} {peoplePerson2} voted {props.question.optionTwo.text}</h3>
                        :
                        null}

                        <Question questionId={props.question.id}/>

                    </Media.Body>
                </Media>
            </Panel.Body>

        </Panel>
    )
}

function mapStateToProps({questions, users, loggedInUser}, props) {
    let params = props.match.params;
    let question = questions[params.id];

    console.log(questions);

    return {
        question: question || null,
        questions: questions,
        author: users[question.author] || null,
        loggedInUser: loggedInUser,
    }
}

export default connect(mapStateToProps)(QuestionDetails);
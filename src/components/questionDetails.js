import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Question } from './question';
import { Panel} from "react-bootstrap";


const QuestionDetails = (props) => {
    const question = this.props.question;

    if (question === null ) {
        return (
            <h1>question doesnt exist</h1>
        )
    }

    return (
        <Panel>
            <Panel.Heading>
                Would you rather
            </Panel.Heading>
            <Question id={question.id}/>

        </Panel>
    )
}
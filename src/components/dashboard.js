import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from './login';
import { Media, Panel} from "react-bootstrap";
import Question from "./question";


class Dashboard extends Component {

    render() {
        console.log(this.props.unansweredQuestions);




        return (
            <div>
                <div>
                    {this.props.loggedInUser ? <WelcomePanel answeredQuestions={this.props.answeredQuestions} unansweredQuestions={this.props.unansweredQuestions}/> : <Login/>}
                </div>
            </div>
        )
    }
}

const WelcomePanel = (props) => {
    return (
        <div>
        <Panel style={{margin: 20}}>
            <Panel.Heading>
                Unanswered Questions
            </Panel.Heading>
            <Panel.Body>
                {props.unansweredQuestions.map((id) =>
                    <Question questionId={id} answered={false} key={id}/>
                )}
            </Panel.Body>
        </Panel>
        <Panel style={{margin: 20}}>
            <Panel.Heading>
                Answered Questions
            </Panel.Heading>
            <Panel.Body>
                {props.answeredQuestions.map((id) =>
                    <Question questionId={id} answered={true} key={id}/>
                )}
            </Panel.Body>
        </Panel>
        </div>
    )
}



function mapStateToProps ({ users, questions, loggedInUser }) {

    return {
        users: users,
        questions: questions,
        loggedInUser: loggedInUser !== null,
        answeredQuestions: Object.keys(questions).filter((key) => questions[key].optionOne.votes.includes(loggedInUser) || questions[key].optionTwo.votes.includes(loggedInUser))
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
        unansweredQuestions: Object.keys(questions).filter((key) => !questions[key].optionOne.votes.includes(loggedInUser) && !questions[key].optionTwo.votes.includes(loggedInUser))
            .sort((a, b) => questions[b].timestamp - questions[a].timestamp),

    }
}
export default connect(mapStateToProps)(Dashboard)
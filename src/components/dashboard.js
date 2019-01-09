import React, { Component } from 'react'
import { connect } from 'react-redux'
import {User} from './user'
import Login from './login';


class Dashboard extends Component {

    render() {
        console.log(this.props);


        return (
            <div>
                <div>
                    <Login/>
                </div>
                <div>
                {Object.keys(this.props.users).map((user) => (
                    <User user={this.props.users[user]} questions={this.props.questions}/>
                ))}
                </div>
            </div>
        )
    }
}

function mapStateToProps ({ users, questions }) {


    return {
        users: users,
        questions: questions

    }
}
export default connect(mapStateToProps)(Dashboard)
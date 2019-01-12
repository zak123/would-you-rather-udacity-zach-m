import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Panel, Media, Button } from "react-bootstrap";
import {login} from "../actions/loggedInUser";


class User extends Component {

    startLogin = (event, id) => {
        this.props.dispatch(login(id));
    };


    render() {
        console.log(this.props.user);

        return (
            <Panel style={{margin: 20}} key={this.props.user.id}>
                <Panel.Heading>{this.props.user.name}</Panel.Heading>
                <Panel.Body>
                    <Media>
                        <Media.Left>
                            <img width={64} height={64} src={this.props.user.avatarURL} alt="thumbnail" />
                        </Media.Left>
                        <Media.Body>
                            {this.props.leaderboard ?
                                <div>
                                    <h3>{this.props.user.questions.length} questions asked</h3>
                                    <h3>{Object.keys(this.props.user.answers).length} questions answered</h3>
                                </div> :
                                <Button onClick={(e) => this.startLogin(e, this.props.user.id)}>
                                    Login as {this.props.user.name}
                                </Button>}

                        </Media.Body>
                    </Media>
                </Panel.Body>
            </Panel>
        )
    }

}


function mapStateToProps({loggedInUser, users, questions}) {
    return {
        loggedInUser: loggedInUser,
        users: users,
    }
}

export default connect(mapStateToProps)(User);
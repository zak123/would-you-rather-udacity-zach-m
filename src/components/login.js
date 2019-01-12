import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel, FormControl, Button, InputGroup } from "react-bootstrap";
import {startAddUser} from "../actions/users";
import User from "./user";


class Login extends Component {

    state = {
        name: '',
        avatarURL: '',
    };

    handleChange = (event) => {
        this.setState({
            name: event.target.value,
        })
    };

    avatarChange = (event) => {
        this.setState({
            avatarURL: event.target.value,
        })
    };

    startSubmit = (event) => {
        console.log(this.state.avatarURL, this.state.name);
        if (this.state.avatarURL.length > 0 && this.state.name.length > 0) {
            this.props.dispatch(startAddUser({avatarURL: this.state.avatarURL, name: this.state.name}))
        } else {
            window.alert('Please fill out all fields before registering');
        }
    };

    render() {
        console.log(this.props);
        return (
            <Panel style={{margin: 20}}>
                <Panel.Heading>Register or select a profile</Panel.Heading>
                <Panel.Body>
                    <div style={{maxWidth: 500}}>
                        <FormControl type={'text'} value={this.state.avatarURL} onChange={this.avatarChange.bind(this)} placeholder={'Enter Avatar URL'} />
                    </div>
                    <div style={{maxWidth: 500}}>
                        <InputGroup style={{marginTop: 10}}>
                            <FormControl type={'text'}  value={this.state.name} onChange={this.handleChange.bind(this)} placeholder={'Enter Username'} />
                            <InputGroup.Button>
                                <Button onClick={this.startSubmit}>
                                    Submit
                                </Button>
                            </InputGroup.Button>
                        </InputGroup>
                    </div>
                    <div>
                        {Object.keys(this.props.usersLocal).map((user) => (
                            <User user={this.props.usersLocal[user]} questions={this.props.questions} key={user}/>
                        ))}
                    </div>
                </Panel.Body>
            </Panel>



        )
    }
}

function mapStateToProps ({ users }) {
    return {
        usersLocal: users
    }
}

export default connect(mapStateToProps)(Login);
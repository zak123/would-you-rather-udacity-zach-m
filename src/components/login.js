import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel, FormControl, Button, Row, Grid, Col, InputGroup } from "react-bootstrap";
import {startAddUser} from "../actions/users";
import Checkbox from "react-bootstrap/es/Checkbox";


class Login extends Component {

    state = {
        name: '',
        avatarURL: '',
        register: false,
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
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.dispatch(startAddUser(this.state.avatarURL, this.state.name))
    };

    handleToggle = (event) => {
        this.setState({
            register: event.target.checked,
        })
    }

    render() {

        const RegisterForm = (
            <div style={{maxWidth: 500}}>
                <FormControl type={'text'} value={this.state.avatarURL} onChange={this.avatarChange.bind(this)} placeholder={'Enter Avatar URL'} />
            </div>
        );

        console.log(this.props);
        return (
            <Panel style={{margin: 20}}>
                <Panel.Heading>Login</Panel.Heading>
                <Panel.Body>
                    {this.state.register ? RegisterForm : null}
                    <div style={{maxWidth: 500}}>
                        <InputGroup style={{marginTop: 10}}>
                            <FormControl type={'text'}  value={this.state.name} onChange={this.handleChange.bind(this)} placeholder={'Enter Username'} />
                            <InputGroup.Button>
                                <Button onClick={this.handleSubmit}>
                                    {this.state.register ? 'Signup' : 'Login'}
                                </Button>
                            </InputGroup.Button>
                        </InputGroup>
                    </div>
                        <div>
                            <Checkbox checked={this.state.register} onChange={this.handleToggle}>
                                Register
                            </Checkbox>
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
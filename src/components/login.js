import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel,FormGroup, ControlLabel, FormControl, HelpBlock, Button, Row, Grid, Col } from "react-bootstrap";
import {startAddUser} from "../actions/users";


class Login extends Component {

    state = {
        name: '',
        avatarURL: '',
    };

    handleChanges = (event) => {
        this.setState({
            [event.name]: event.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch(startAddUser(this.state.avatarURL, this.state.name))
    };

    render() {
        console.log(this.props);
        return (
            <Panel style={{margin: 20}}>
                <Panel.Heading>Login</Panel.Heading>
                <Panel.Body>
                    <Grid>
                    <Row>
                    <Col xs={12} md={8}>
                        <FormControl type={'text'} style={{maxWidth: "100%", minWidth: 200, margin: 10}} />
                    </Col>
                        <Col xs={6} md={4}>

                        <Button style={{ width: 100, height: '100%', margin: 10}}>
                            Login
                        </Button>
                        </Col>
                    </Row>
                    </Grid>

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
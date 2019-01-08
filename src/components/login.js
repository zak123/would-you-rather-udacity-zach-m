import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel } from "react-bootstrap";


class Login extends Component {
    render() {
        console.log(this.props);
        return (
            <Panel>
                <h2>test</h2>
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
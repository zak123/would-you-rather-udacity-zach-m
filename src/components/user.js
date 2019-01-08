import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Panel } from "react-bootstrap";


class User extends Component {
    render() {
        return (
            <Panel>
                <Panel.Title>User Name</Panel.Title>
                <Panel.Body>User Data</Panel.Body>
            </Panel>
        )
    }
}

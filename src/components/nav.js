import React from 'react'
import { connect } from 'react-redux'
import {withRouter } from 'react-router-dom';

import {Navbar, NavItem, Nav} from "react-bootstrap";

const authLinks = () => {
    return (
        <Nav>
            <NavItem eventKey={1} href="#">
                Logout
            </NavItem>
            <NavItem eventKey={2} href="#">
                Leaderboard
            </NavItem>

        </Nav>
    )
}

const NavBar = (props) => {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#home">Would you rather?</a>
                </Navbar.Brand>
            </Navbar.Header>
            {props.loggedInUser ? authLinks: null}
        </Navbar>
    )
}

function mapStateToProps({loggedInUser}) {
    return {
        loggedInUser: loggedInUser !== null
    }
}

export default withRouter(connect(mapStateToProps)(NavBar));
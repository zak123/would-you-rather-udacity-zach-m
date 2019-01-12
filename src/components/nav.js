import React, {Component} from 'react'
import { connect } from 'react-redux'
import {withRouter } from 'react-router-dom';
import { logout} from "../actions/loggedInUser";

import {Navbar, NavItem, Nav, } from "react-bootstrap";

// const AuthLinks = (props) => {
//     console.log(props.loggedInUser);
//     return (
//
//     )
// }

class NavBar extends Component {

    render() {

        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a onClick={() => this.props.history.push('/')}>Would you rather?</a>
                    </Navbar.Brand>
                </Navbar.Header>
                {this.props.loggedInUser !== null ?
                    <Nav>
                        <NavItem onClick={() => this.props.dispatch(logout(this.props.loggedInUser))}>
                            Logout
                        </NavItem>
                            <NavItem onClick={() => this.props.history.push('/leaderboard')}>
                                Leaderboard
                            </NavItem>
                        <NavItem onClick={() => console.log('hello!')}>
                            Welcome, {this.props.loggedInUser}
                        </NavItem>
                </Nav> : null}
            </Navbar>
        )
    }

}

function mapStateToProps({loggedInUser, users}) {
    return {
        loggedInUser: loggedInUser,
        user: loggedInUser !== null ? users[loggedInUser] : null,
        users: users
    }
}

export default withRouter(connect(mapStateToProps)(NavBar));
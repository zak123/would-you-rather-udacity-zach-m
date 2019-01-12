import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Login from './login';


const PrivatePage = ((props) => {
    let Component = props.view;
    let loggedInUser = props.loggedInUser;
    console.log('private page: ', props.loggedInUser);
    return (
        <Route {...props} render={(viewProps) => (
        <Fragment>
            {loggedInUser ? <Component {...viewProps} /> : <Login/>}
        </Fragment>

            )}/>
    )
});

// credit: https://tylermcginnis.com/react-router-protected-routes-authentication/
//


function mapStateToProps ({loggedInUser }) {


    return {
        loggedInUser: loggedInUser

    }
}
export default connect(mapStateToProps)(PrivatePage)
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import User from './user';


const Leaderboard = (props) => {
    return (
        <Fragment>
            <div>
                <h2>leaderboard</h2>
                {Object.keys(props.users).map((user) => (
                    <User user={props.users[user]} key={user.id}/>
                ))}
            </div>
        </Fragment>
    )
}

function mapStateToProps({users}) {
    return {
        users: users,
    }
}

export default connect(mapStateToProps)(Leaderboard);
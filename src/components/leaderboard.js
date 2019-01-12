import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import User from './user';


const Leaderboard = (props) => {
    return (
        <Fragment>
            <div>
                <h2>leaderboard</h2>
                {props.sortedIds.map((user) => (
                    <User user={props.users[user]} leaderboard={true} key={user}/>
                ))}
            </div>
        </Fragment>
    )
}

function mapStateToProps({users}) {
    return {
        users: users,
        sortedIds: Object.keys(users)
            .sort((x, y) => (Object.keys(users[y].answers).length + users[y].questions.length) - (Object.keys(users[x].answers).length + users[x].questions.length))
    }
}

export default connect(mapStateToProps)(Leaderboard);
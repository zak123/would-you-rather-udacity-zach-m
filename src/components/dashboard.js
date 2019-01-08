import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Panel } from "react-bootstrap";


class Dashboard extends Component {

    render() {

        console.log(this.props);
        const { usersLocal } = this.props;

        return (
            <div>
                {Object.keys(usersLocal).map((user) => (
                    <Panel style={{margin: 20}} key={usersLocal[user].id}>
                        <Panel.Heading>{usersLocal[user].name}</Panel.Heading>
                        <Panel.Body>Answered polls</Panel.Body>
                    </Panel>
                ))}
            </div>
        )
    }
}

function mapStateToProps ({ users }) {
    return {
        usersLocal: users
    }
}
export default connect(mapStateToProps)(Dashboard)
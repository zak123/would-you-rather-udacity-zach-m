import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Panel, Media, } from "react-bootstrap";



export const User = (props) => {
    let userQuestions =
        Object.keys(props.questions)
            .filter(key => props.user.id === key)
            .reduce((obj, key) => {
                obj[key] = props.questions[key];
                return obj;
            }, {});


    return (
        <Panel style={{margin: 20}} key={props.user.id}>
            <Panel.Heading>{props.user.name}</Panel.Heading>
            <Panel.Body>
                <ProfileCard
                    user={props.user}
                    questions={userQuestions}
                />
            </Panel.Body>
        </Panel>
    )
}

const ProfileCard = (props) => {
    console.log('test', props.questions);
    return (
        <Media>
            <Media.Left>
                <img width={64} height={64} src={props.user.avatarURL} alt="thumbnail" />
            </Media.Left>
            <Media.Body>
                <Media.Heading>Media Heading</Media.Heading>
                <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                    fringilla. Donec lacinia congue felis in faucibus.
                </p>
            </Media.Body>
        </Media>
    )
}

function mapStateToProps(questions) {
    return {
        questions
    }

}

export default connect(mapStateToProps)(User);
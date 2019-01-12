import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startAddQuestion } from '../actions/questions';
import {Button, FormControl, InputGroup, Panel} from "react-bootstrap";


class Submit extends Component {
    state = {
        select1: '',
        select2: '',

    }

    handleChange = (event) => {
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value,

        })
    }

    startSubmit = () => {
        console.log(this.state.select2, this.state.select1);
        this.props.dispatch(startAddQuestion(this.state.select1, this.state.select2));

        this.setState({
            select1: '',
            select2: '',
        })

        this.props.history.push('/');
    }


    render() {
        return (
            <Panel style={{margin: 20}}>
                <Panel.Heading>Submit a new Would you rather</Panel.Heading>
                <Panel.Body>
                    <div style={{maxWidth: 500}}>
                        <FormControl type={'text'} value={this.state.select1} name={'select1'} onChange={this.handleChange} placeholder={'Enter Option 1'} />
                    </div>
                    <div style={{maxWidth: 500}}>
                        <InputGroup style={{marginTop: 10}}>
                            <FormControl type={'text'}  value={this.state.select2} name={'select2'} onChange={this.handleChange} placeholder={'Enter Option 2'} />
                            <InputGroup.Button>
                                <Button onClick={this.startSubmit}>
                                    Submit
                                </Button>
                            </InputGroup.Button>
                        </InputGroup>
                    </div>
                </Panel.Body>
            </Panel>
        )
    }

}



function mapStateToProps({loggedInUser}) {
    return {
        loggedInUser: loggedInUser
    }
}

export default connect(mapStateToProps)(Submit);
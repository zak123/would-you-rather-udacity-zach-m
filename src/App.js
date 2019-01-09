import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Dashboard from "./components/dashboard";
import Login from "./components/login"
import { connect } from 'react-redux';
import {handleInitialData} from "./actions/shared";
import './App.css';
import NavBar from './components/nav';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
            <NavBar/>
          <Switch>
              <Route path='/' component={Dashboard} />
          </Switch>
        </Fragment>

      </Router>
    );
  }
}

function mapStateToProps () {
  return {

  }
}

export default connect(mapStateToProps)(App)

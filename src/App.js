import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Dashboard from "./components/dashboard";
import { connect } from 'react-redux';
import {handleInitialData} from "./actions/shared";
import './App.css';
import NavBar from './components/nav';
import PrivatePage from './components/privatePage';
import Leaderboard from './components/leaderboard';
import NotFound from './components/notFound';
import Submit from './components/submit';
import Details from './components/questionDetails';

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
              <PrivatePage path='/' exact view={Dashboard} />
              <PrivatePage path='/leaderboard' exact view={Leaderboard} />
              <PrivatePage path='/add' exact view={Submit} />
              <PrivatePage path='/questions/:id' exact view={Details} />
              <Route component={NotFound}/>
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

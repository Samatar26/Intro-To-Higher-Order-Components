import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';
import Resources from './Resources';
import requireAuth from './../components/hoc/Require_Auth';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route path="/resources" component={requireAuth(Resources)} />
        </div>
      </Router>
    );
  }
}

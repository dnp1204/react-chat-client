import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import { fetchUser } from '../actions';
import AuthGuard from '../components/hoc/AuthGuard';
import Login from './login/Login';
import MainScene from './main/MainScene';
import SignUp from './signUp/SignUp';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route
            exact
            path="/"
            render={() => (
              <AuthGuard
                needAuth
                redirectTo="/login"
                render={() => <MainScene />}
              />
            )}
          />
          <Route
            path="/login"
            render={() => <AuthGuard redirectTo="/" render={() => <Login />} />}
          />
          <Route
            path="/signup"
            render={() => (
              <AuthGuard redirectTo="/" render={() => <SignUp />} />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  { fetchUser }
)(App);

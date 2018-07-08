import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import { fetchUser } from '../actions';
import AuthGuard from '../components/hoc/AuthGuard';
import Loading from '../components/tools/spinner/Loading';
import Login from './login/Login';
import MainScene from './main/MainScene';
import SignUp from './signUp/SignUp';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const {
      auth,
      ui: { isLoading }
    } = this.props;
    const isAuthenticated = auth ? true : false;

    if (isLoading) {
      return <Loading />;
    }

    return (
      <BrowserRouter>
        <div>
          <Route
            exact
            path="/"
            render={() => (
              <AuthGuard
                isAuthenticated={isAuthenticated}
                needAuth
                render={() => <MainScene />}
              />
            )}
          />
          <Route
            path="/login"
            render={() => (
              <AuthGuard
                isAuthenticated={isAuthenticated}
                redirectTo="/"
                render={() => <Login />}
              />
            )}
          />
          <Route
            path="/signup"
            render={() => (
              <AuthGuard
                isAuthenticated={isAuthenticated}
                redirectTo="/"
                render={() => <SignUp />}
              />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth, ui: state.ui };
}

export default connect(
  mapStateToProps,
  { fetchUser }
)(App);

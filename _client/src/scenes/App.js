import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import io from 'socket.io-client';

import { fetchUser, setSocket } from '../actions';
import AuthGuard from '../components/hoc/AuthGuard';
import Loading from '../components/tools/spinner/Loading';
import Login from './login/Login';
import MainScene from './main/MainScene';
import SignUp from './signUp/SignUp';

class App extends Component {
  componentDidMount() {
    this.socket = io('http://localhost:5000', {
      transports: ['websocket']
    });
    this.props.setSocket(this.socket);
    this.props.fetchUser();
  }

  render() {
    const {
      auth,
      ui: {
        loading: { isLoading }
      }
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
  return {
    auth: state.auth,
    friendList: state.friendList,
    ui: state.ui
  };
}

export default connect(
  mapStateToProps,
  { fetchUser, setSocket }
)(App);

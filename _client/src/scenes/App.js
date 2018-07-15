import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import io from 'socket.io-client';

import { fetchUser, setSocket } from '../actions';
import AuthGuard from '../components/hoc/AuthGuard';
import Loading from '../components/tools/spinner/Loading';
import MainScene from './main/MainScene';
import Login from './un-auth/Login';
import SignUp from './un-auth/SignUp';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.user && this.props.user) {
      this.socket = io('http://localhost:5000', {
        transports: ['websocket']
      });
      this.props.setSocket(this.socket);
    }
  }

  render() {
    const {
      user,
      ui: {
        loading: { isLoading }
      }
    } = this.props;
    const isAuthenticated = user ? true : false;

    if (isLoading) {
      return <Loading />;
    }

    return (
      <BrowserRouter>
        <div>
          <Route
            exact
            path="/"
            render={props => (
              <AuthGuard
                isAuthenticated={isAuthenticated}
                needAuth
                render={() => <MainScene history={props.history} />}
              />
            )}
          />
          <Route
            path="/login"
            render={props => (
              <AuthGuard
                isAuthenticated={isAuthenticated}
                redirectTo="/"
                render={() => <Login history={props.history} />}
              />
            )}
          />
          <Route
            path="/signup"
            render={props => (
              <AuthGuard
                isAuthenticated={isAuthenticated}
                redirectTo="/"
                render={() => <SignUp history={props.history} />}
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
    user: state.auth,
    friendList: state.friendList,
    ui: state.ui
  };
}

export default connect(
  mapStateToProps,
  { fetchUser, setSocket }
)(App);

import './Login.scss';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LinkWithIcon from '../../components/elements/icon/LinkWithIcon';

class Login extends Component {
  render() {
    return (
      <div className="app-login-page">
        <div className="login-page-container">
          <h1 className="headline">React Messenger</h1>
          <div className="third-party-login">
            <LinkWithIcon
              href="/auth/facebook"
              iconName="facebook-f"
              iconType="bold"
              backgroundColor="primary"
              text="Log in with Facebook"
            />
          </div>
          <div className="split-line-container">
            <div className="split-line" />
            <div className="between">OR</div>
            <div className="split-line" />
          </div>
          <div className="form-group">
            <input className="form-control" placeholder="Email" />
            <input className="form-control" placeholder="Password" />
          </div>
          <div className="button-container">
            <button className="btn btn-block btn-primary">Log In</button>
            <Link to="/signup">
              <button className="btn btn-block btn-default">
                Create New Account
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

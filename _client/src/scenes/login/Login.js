import React, { Component } from 'react';
import LinkWithIcon from '../../components/elements/icon/LinkWithIcon';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <div className={`app-login-page ${this.props.hidden}`}>
        <div className="login-page-container">
          <h1 className="logo">React Messenger</h1>
          <LinkWithIcon
            href="/auth/google"
            iconName="google"
            backgroundColor="red"
            text="Log in with Google"
          />
          <LinkWithIcon
            href="/auth/facebook"
            iconName="facebook"
            backgroundColor="red"
            text="Log in with Facebook"
          />
          <div className="split-line-container">
            <div className="split-line" />
            <div className="between">OR</div>
            <div className="split-line" />
          </div>
          <div className="form-group">
            <input className="form-control" placeholder="Email" />
            <input className="form-control" placeholder="First Name" />
            <input className="form-control" placeholder="Last Name" />
            <input className="form-control" placeholder="Password" />
            <input
              className="form-control"
              placeholder="Confirmation Password"
            />
          </div>
          <button className="btn btn-block btn-primary">Sign Up</button>
        </div>
      </div>
    );
  }
}

export default Login;

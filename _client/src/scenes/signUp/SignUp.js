import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LinkWithIcon from '../../components/elements/icon/LinkWithIcon';

class SignUp extends Component {
  render() {
    return (
      <div className={`app-login-page ${this.props.hidden}`}>
        <div className="login-page-container">
          <h1 className="headline">React Messenger</h1>
          <LinkWithIcon
            href="/auth/facebook"
            iconName="facebook-f"
            iconType="bold"
            backgroundColor="primary"
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
            <input className="form-control" placeholder="Password Again" />
          </div>
          <div className="button-container">
            <button className="btn btn-block btn-primary">Sign Up</button>
            <Link to="/login">
              <button className="btn btn-block btn-default">Go Back</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;

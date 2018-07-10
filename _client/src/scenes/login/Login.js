import './Login.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import { login } from '../../actions';
import LinkWithIcon from '../../components/elements/icon/LinkWithIcon';
import { email, required } from '../../utils/fieldValidation';

class Login extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.keyCode === 13) {
      this.props.dispatch(this.props.handleSubmit(this.handleSubmit));
    }
  };

  renderField = ({ input, placeholder, type, meta: { touched, error } }) => {
    return (
      <div>
        {touched && (error && <span className="form-has-error">{error}</span>)}
        <input
          {...input}
          className={`form-control ${
            touched && error ? 'form-error-control' : ''
          }`}
          placeholder={placeholder}
          type={type}
        />
      </div>
    );
  };

  handleSubmit = value => {
    this.props.login(value, this.props.reset);
  };

  render() {
    const { handleSubmit, submitting } = this.props;

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
          <form
            className="form-group"
            onSubmit={handleSubmit(this.handleSubmit)}
          >
            <Field
              name="email"
              type="text"
              component={this.renderField}
              placeholder="Email"
              validate={[required, email]}
            />
            <Field
              name="password"
              type="text"
              component={this.renderField}
              placeholder="Password"
              validate={[required]}
            />
          </form>
          <div className="button-container">
            <button
              type="submit"
              onClick={handleSubmit(this.handleSubmit)}
              disabled={submitting}
              className="btn btn-block btn-primary"
            >
              Log In
            </button>
            <Link to="/signup">
              <button
                disabled={submitting}
                className="btn btn-block btn-default"
              >
                Create New Account
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default reduxForm({ form: 'loginForm' })(
  connect(
    null,
    { login }
  )(Login)
);

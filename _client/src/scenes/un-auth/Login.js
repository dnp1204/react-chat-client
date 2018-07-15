import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import { login } from '../../actions';
import { email, required } from '../../utils/fieldValidation';
import BaseComponent from './BaseComponent';

class Login extends Component {
  handleKeyDown = event => {
    if (event.keyCode === 13) {
      this.props.dispatch(this.props.handleSubmit(this.handleSubmit));
    }
  };

  handleSubmit = value => {
    this.props.login(value, this.props.reset);
  };

  render() {
    const { handleSubmit, submitting, invalid, pristine } = this.props;

    return (
      <BaseComponent
        handleKeyDown={this.handleKeyDown}
        render={renderField => (
          <form
            className="form-group"
            onSubmit={handleSubmit(this.handleSubmit)}
          >
            <Field
              name="email"
              type="text"
              component={renderField}
              placeholder="Email"
              validate={[required, email]}
            />
            <Field
              name="password"
              type="password"
              component={renderField}
              placeholder="Password"
              validate={[required]}
            />
          </form>
        )}
      >
        <div className="button-container">
          <button
            type="submit"
            onClick={handleSubmit(this.handleSubmit)}
            disabled={invalid | submitting | pristine}
            className="btn btn-block btn-primary"
          >
            Log In
          </button>
          <Link disabled={submitting} to="/signup">
            <button className="btn btn-block btn-default">
              Create New Account
            </button>
          </Link>
        </div>
      </BaseComponent>
    );
  }
}

export default reduxForm({ form: 'loginForm' })(
  connect(
    null,
    { login }
  )(Login)
);

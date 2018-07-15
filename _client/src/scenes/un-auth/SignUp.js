import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import { login } from '../../actions';
import {
  email,
  required,
  minLength3,
  passwordMatch
} from '../../utils/fieldValidation';
import BaseComponent from './BaseComponent';

class SignUp extends Component {
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
              name="first-name"
              type="text"
              component={renderField}
              placeholder="First Name"
              validate={[required, minLength3]}
            />
            <Field
              name="last-name"
              type="text"
              component={renderField}
              placeholder="Last Name"
              validate={[required, minLength3]}
            />
            <Field
              name="password"
              type="password"
              component={renderField}
              placeholder="Password"
              validate={[required]}
            />
            <Field
              name="confirm-password"
              type="password"
              component={renderField}
              placeholder="Password Again"
              validate={[required, passwordMatch]}
            />
          </form>
        )}
      >
        <div className="button-container">
          <button
            onClick={handleSubmit(this.handleSubmit)}
            disabled={invalid | submitting | pristine}
            className="btn btn-block btn-primary"
          >
            Sign Up
          </button>
          <Link disabled={submitting} to="/login">
            <button className="btn btn-block btn-default">Go Back</button>
          </Link>
        </div>
      </BaseComponent>
    );
  }
}

export default reduxForm({ form: 'signUpForm' })(
  connect(
    null,
    { login }
  )(SignUp)
);

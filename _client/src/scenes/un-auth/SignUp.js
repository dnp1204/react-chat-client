import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { signUp } from '../../actions';
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
    this.props.signUp(value, () => {
      this.props.reset();
      this.props.history.push('/login');
    });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <BaseComponent
        data={this.props}
        primaryButtonTitle="Sign Up"
        defaultButtonTitle="Go Back"
        defaultButtonLink="/login"
        handleSubmit={this.handleSubmit}
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
              name="firstName"
              type="text"
              component={renderField}
              placeholder="First Name"
              validate={[required, minLength3]}
            />
            <Field
              name="lastName"
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
              name="confirmationPassword"
              type="password"
              component={renderField}
              placeholder="Password Again"
              validate={[required, passwordMatch]}
            />
          </form>
        )}
      />
    );
  }
}

export default reduxForm({ form: 'signUpForm' })(
  connect(
    null,
    { signUp }
  )(SignUp)
);

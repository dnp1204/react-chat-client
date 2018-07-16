import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    this.props.login(value, this.props.destroy);
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <BaseComponent
        data={this.props}
        primaryButtonTitle="Login"
        defaultButtonTitle="Create New Account"
        defaultButtonLink="/signup"
        handleKeyDown={this.handleKeyDown}
        handleSubmit={this.handleSubmit}
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
      />
    );
  }
}

export default reduxForm({ form: 'loginForm', destroyOnUnmount: false })(
  connect(
    null,
    { login }
  )(Login)
);

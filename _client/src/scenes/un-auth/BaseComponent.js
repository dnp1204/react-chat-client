import './BaseComponent.scss';

import React, { Component } from 'react';

import FormField from './FormField';
import LinkWithIcon from '../../components/elements/icon/LinkWithIcon';

class BaseComponent extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.props.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.props.handleKeyDown);
  }

  renderField = ({ input, placeholder, type, meta: { touched, error } }) => {
    return (
      <FormField
        input={input}
        placeholder={placeholder}
        type={type}
        touched={touched}
        error={error}
      />
    );
  };

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
          {this.props.render(this.renderField)}
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default BaseComponent;

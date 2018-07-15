import './BaseComponent.scss';

import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import FormField from './FormField';
import LinkWithIcon from '../../components/elements/icon/LinkWithIcon';

class BaseComponent extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.props.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.props.handleKeyDown);
  }

  renderField = ({
    input,
    placeholder,
    type,
    meta: { touched, error, asyncValidating }
  }) => {
    return (
      <FormField
        asyncValidating={asyncValidating}
        input={input}
        placeholder={placeholder}
        type={type}
        touched={touched}
        error={error}
      />
    );
  };

  render() {
    const {
      primaryButtonTitle,
      defaultButtonTitle,
      defaultButtonLink
    } = this.props;
    const { handleSubmit, submitting, invalid, pristine } = this.props.data;

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

          <div className="button-container">
            <button
              type="submit"
              onClick={handleSubmit(this.props.handleSubmit)}
              disabled={invalid | submitting | pristine}
              className="btn btn-block btn-primary"
            >
              {primaryButtonTitle}
            </button>
            <Link disabled={submitting} to={defaultButtonLink}>
              <button className="btn btn-block btn-default">
                {defaultButtonTitle}
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BaseComponent;

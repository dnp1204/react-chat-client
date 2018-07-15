import PropTypes from 'prop-types';
import React from 'react';
import { Redirect } from 'react-router-dom';

class AuthGuard extends React.PureComponent {
  render() {
    const { needAuth, isAuthenticated, redirectTo, render } = this.props;
    if (needAuth) {
      return isAuthenticated ? (
        render()
      ) : (
        <Redirect to={{ pathname: redirectTo }} />
      );
    } else {
      return !isAuthenticated ? (
        render()
      ) : (
        <Redirect to={{ pathname: redirectTo }} />
      );
    }
  }
}

AuthGuard.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  needAuth: PropTypes.bool,
  redirectTo: PropTypes.string,
  render: PropTypes.func.isRequired
};

AuthGuard.defaultProps = {
  redirectTo: '/login'
};

export default AuthGuard;

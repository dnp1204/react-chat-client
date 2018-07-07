import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { fetchUser } from '../../actions';

class AuthGuard extends React.PureComponent {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const { needAuth, auth, redirectTo, render } = this.props;

    if (needAuth) {
      return auth ? render() : <Redirect to={{ pathname: redirectTo }} />;
    } else {
      return !auth ? render() : <Redirect to={{ pathname: redirectTo }} />;
    }
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(
  mapStateToProps,
  { fetchUser }
)(AuthGuard);

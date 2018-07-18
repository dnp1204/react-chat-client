import './Notification.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { resetError } from '../../actions';

class Notification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      message: '',
      type: 'success'
    };
  }

  componentDidMount() {
    this.checkError();
    this.checkSuccess();
  }

  // componentDidUpdate() {
  //   this.checkError();
  // }

  checkSuccess = () => {
    const {
      notification: {
        success: { content, timeout }
      }
    } = this.props;

    if (content) {
      this.setState({ show: true, message: content, type: 'success' });
      setTimeout(() => {
        this.props.resetError();
        this.setState({ show: false });
      }, timeout);
    }
  };

  checkError = () => {
    const {
      notification: {
        error: { content, timeout }
      }
    } = this.props;

    if (content) {
      this.setState({ show: true, message: content, type: 'error' });
      setTimeout(() => {
        this.props.resetError();
        this.setState({ show: false });
      }, timeout);
    }
  };

  render() {
    const { show, message, type } = this.state;

    let typeClassName = 'notification-success';
    if (type === 'error') {
      typeClassName = 'notification-error';
    }

    let hideClassName = 'notification-hide';
    if (message) {
      hideClassName = 'notification-auto-hide';
    }

    return (
      <div
        className={`notification-container ${typeClassName} ${
          show ? 'notification-show' : hideClassName
        }`}
      >
        <div>{message}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { notification: state.notification };
}

export default connect(
  mapStateToProps,
  { resetError }
)(Notification);

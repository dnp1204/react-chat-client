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
  }

  checkError = () => {
    const {
      message: { errors }
    } = this.props;
    for (let error in errors) {
      if (errors[error]) {
        this.setState({ show: true, message: errors[error], type: 'error' });
        setTimeout(() => {
          this.props.resetError();
          this.setState({ show: false });
        }, 3000);
        break;
      }
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
  return { message: state.message };
}

export default connect(
  mapStateToProps,
  { resetError }
)(Notification);

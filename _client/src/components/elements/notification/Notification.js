import './Notification.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { resetError } from '../../../actions';

class Notification extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      message: '',
      type: 'success',
      hideClassName: ''
    };
  }

  componentDidMount() {
    this.checkError();
  }

  checkError = () => {
    const {
      ui: { errors }
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

    return (
      <div
        className={`notification-container ${typeClassName} ${
          show ? 'notification-show' : 'notification-auto-hide'
        }`}
      >
        <div>{message}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ui: state.ui };
}

export default connect(
  mapStateToProps,
  { resetError }
)(Notification);

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Dropdown extends Component {
  state = { show: false, clickedTarget: null };

  componentDidMount() {
    window.addEventListener('click', this.onClickHandler.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onClickHandler.bind(this));
  }

  onClickHandler(event) {
    const { hideWhenClickOnDropDown } = this.props;
    let container = ReactDOM.findDOMNode(this);

    if (container.contains(event.target)) {
      if (!this.state.show && !hideWhenClickOnDropDown) {
        this.setState({ clickedTarget: event.target });
      }

      if (this.state.show) {
        if (hideWhenClickOnDropDown) {
          this.setState({ show: false });
        } else {
          if (this.state.clickedTarget === event.target) {
            this.setState({ show: false });
          } else {
            this.setState({ show: true });
          }
        }
      } else {
        this.setState({ show: true });
      }
    } else {
      this.setState({ show: false });
    }
  }

  renderDropDown() {
    if (this.state.show) {
      return this.props.renderDropdownComponent;
    } else {
      return <div />;
    }
  }

  render() {
    return (
      <div style={{ position: 'relative' }}>
        {this.props.children}
        {this.renderDropDown()}
      </div>
    );
  }
}

Dropdown.propTypes = {
  renderDropdownComponent: PropTypes.element,
  hideWhenClickOnDropDown: PropTypes.bool
};

Dropdown.defaultProps = {
  renderDropdownComponent: <div />,
  hideWhenClickOnDropDown: true
};

export default Dropdown;

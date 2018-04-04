import PropTypes from 'prop-types';
import React, { Component } from 'react';

import TextAndRightIcon from '../../../common/icon/TextAndRightIcon';

class BaseComponent extends Component {
  state = { showChild: true };

  render() {
    const {
      componentName,
      classNameToCustom,
      isNeededBorderBottom
    } = this.props;

    return (
      <div
        className={`tool--section ${classNameToCustom} ${
          isNeededBorderBottom ? 'border-bottom' : ''
        }`}
      >
        <div className="title">
          <TextAndRightIcon
            text={componentName}
            iconName="chevron-down"
            isCursorPointer
            iconClassName={
              this.state.showChild
                ? 'move-down-90deg-animation'
                : 'move-left-90deg-animation'
            }
            onIconClickHandler={() =>
              this.setState({ showChild: !this.state.showChild })
            }
          />
        </div>
        <div className="children">
          {this.state.showChild ? this.props.children : <div />}
        </div>
      </div>
    );
  }
}

BaseComponent.propTypes = {
  componentName: PropTypes.string.isRequired,
  classNameToCustom: PropTypes.string,
  isNeededBorderBottom: PropTypes.bool
};

BaseComponent.defaultProps = {
  classNameToCustom: ''
};

export default BaseComponent;

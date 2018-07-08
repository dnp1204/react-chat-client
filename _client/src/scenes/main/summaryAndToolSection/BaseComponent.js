import PropTypes from 'prop-types';
import React, { Component } from 'react';

import TextAndRightIcon from '../../../components/elements/icon/TextAndRightIcon';

class BaseComponent extends Component {
  render() {
    const {
      showChild,
      onIconClickHandler,
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
            iconName="angle-down"
            iconType="solid"
            isCursorPointer
            iconClassName={
              showChild
                ? 'move-down-90deg-animation'
                : 'move-left-90deg-animation'
            }
            onIconClickHandler={() => onIconClickHandler(!showChild)}
          />
        </div>
        <div className="children">
          {showChild ? this.props.children : <div />}
        </div>
      </div>
    );
  }
}

BaseComponent.propTypes = {
  showChild: PropTypes.bool,
  onIconClickHandler: PropTypes.func,
  componentName: PropTypes.string.isRequired,
  classNameToCustom: PropTypes.string,
  isNeededBorderBottom: PropTypes.bool
};

BaseComponent.defaultProps = {
  classNameToCustom: '',
  showChild: true,
  onIconClickHandler: () => {}
};

export default BaseComponent;

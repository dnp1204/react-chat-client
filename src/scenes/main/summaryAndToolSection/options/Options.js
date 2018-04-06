import _ from 'lodash';
import React, { Component } from 'react';

import IconWithNextText from '../../../../components/elements/icon/IconWithNextText';
import CustomModal from '../../../../components/hoc/modal/Modal';
import BaseComponent from '../BaseComponent';
import './Options.scss';
import { Color } from '../../../../utils/constants';

class Options extends Component {
  renderColors(colors) {
    return colors.map(color => {
      return (
        <div
          key={color}
          className={`color-element ${
            this.props.systemColor === color ? 'active' : ''
          }`}
          style={{ backgroundColor: color }}
        >
          <div style={{ backgroundColor: 'white' }} />
        </div>
      );
    });
  }

  renderColorsChoice(colorRows) {
    return colorRows.map(row => {
      return (
        <div className="flex--row justify--space__between color-row">
          {this.renderColors(row)}
        </div>
      );
    });
  }

  renderChangeColorModalContent() {
    const colorRow1 = [
      Color.BLUE,
      Color.PELOROUS,
      Color.AMBER,
      Color.CORAL_RED,
      Color.CAN_CAN
    ];
    const colorRow2 = [];
    const colorRow3 = [];
    const color = [colorRow1, colorRow2, colorRow3];

    return (
      <div className="change-color-modal-content">
        <h3>Pick a color for this conversation</h3>
        <p>Every one in this conversation will see this</p>
        <div className="change-color-modal-content--color-panel">
          {this.renderColorsChoice(color)}
        </div>
      </div>
    );
  }

  renderAllIconForTool() {
    const iconTools = [
      {
        iconName: 'search',
        isCursorPointer: true,
        text: 'Search in Conversation'
      },
      { iconName: 'pencil', isCursorPointer: true, text: 'Edit Nicknames' },
      {
        iconName: 'paint-brush',
        isCursorPointer: true,
        text: 'Change Color',
        renderModalContent: this.renderChangeColorModalContent()
      },
      { iconName: 'smile-o', isCursorPointer: true, text: 'Change Emoji' }
    ];

    return _.map(iconTools, icon => {
      const { iconName, isCursorPointer, text, renderModalContent } = icon;
      return (
        <CustomModal
          key={iconName}
          render={onClickToShowModal => (
            <div onClick={() => onClickToShowModal()} className="element">
              <IconWithNextText
                iconColor={this.props.systemColor}
                iconName={iconName}
                isCursorPointer={isCursorPointer}
                text={text}
              />
            </div>
          )}
        >
          {renderModalContent}
        </CustomModal>
      );
    });
  }

  render() {
    const { isShow, onIconClickHandler } = this.props;

    return (
      <BaseComponent
        onIconClickHandler={isShow => onIconClickHandler(isShow)}
        showChild={isShow}
        componentName="Options"
        classNameToCustom="tool--options"
        isNeededBorderBottom={true}
      >
        {this.renderAllIconForTool()}
      </BaseComponent>
    );
  }
}

export default Options;

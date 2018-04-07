import _ from 'lodash';
import React, { Component } from 'react';

import IconWithNextText from '../../../../components/elements/icon/IconWithNextText';
import CustomModal from '../../../../components/hoc/modal/Modal';
import { OptionTools } from '../../../../utils/constants';
import BaseComponent from '../BaseComponent';
import ColorsPanel from './colorPanel/ColorsPanel';

class Options extends Component {
  renderModalContent(toolName, hideModal) {
    switch (toolName) {
      case OptionTools.CHANGE_COLOR:
        return (
          <ColorsPanel
            cancelButtonAction={hideModal}
            systemColor={this.props.systemColor}
          />
        );
      default:
        return <div />;
    }
  }

  renderToolIconWithoutModal() {
    const { systemColor } = this.props;
    const iconTools = [
      {
        iconName: 'search',
        isCursorPointer: true,
        text: OptionTools.SEARCH_IN_CONVERSATION
      }
    ];

    return _.map(iconTools, icon => {
      const { iconName, isCursorPointer, text } = icon;
      return (
        <div className="element">
          <IconWithNextText
            iconColor={systemColor}
            iconName={iconName}
            isCursorPointer={isCursorPointer}
            text={text}
          />
        </div>
      );
    });
  }

  renderToolIconWithModal() {
    const { systemColor } = this.props;
    const iconTools = [
      {
        iconName: 'pencil',
        isCursorPointer: true,
        text: OptionTools.EDIT_NICK_NAME
      },
      {
        iconName: 'paint-brush',
        isCursorPointer: true,
        text: OptionTools.CHANGE_COLOR
      },
      {
        iconName: 'smile-o',
        isCursorPointer: true,
        text: OptionTools.CHANGE_EMOJI
      }
    ];

    return _.map(iconTools, icon => {
      const { iconName, isCursorPointer, text } = icon;
      return (
        <CustomModal
          key={iconName}
          render={onClickToShowModal => (
            <div onClick={() => onClickToShowModal()} className="element">
              <IconWithNextText
                iconColor={systemColor}
                iconName={iconName}
                isCursorPointer={isCursorPointer}
                text={text}
              />
            </div>
          )}
          renderModalContent={hideModal =>
            this.renderModalContent(text, hideModal)
          }
        />
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
        {this.renderToolIconWithoutModal()}
        {this.renderToolIconWithModal()}
      </BaseComponent>
    );
  }
}

export default Options;

import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import IconWithNextText from '../../../../components/elements/icon/IconWithNextText';
import CustomModal from '../../../../components/hoc/modal/Modal';
import { OptionTools } from '../../../../utils/constants';
import BaseComponent from '../BaseComponent';
import ColorsPanel from './colorPanel/ColorsPanel';
import EmojiPanel from './emojiPanel/EmojiPanel';
import { changeShowSearchInput } from '../../../../actions';

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
      case OptionTools.CHANGE_EMOJI:
        return <EmojiPanel cancelButtonAction={hideModal} />;
      default:
        return <div />;
    }
  }

  renderToolIconWithoutModal() {
    const { systemColor, showSearch, changeShowSearchInput } = this.props;
    const iconTools = [
      {
        iconName: 'search',
        iconType: 'solid',
        isCursorPointer: true,
        text: OptionTools.SEARCH_IN_CONVERSATION,
        onClickHandler: () => {
          changeShowSearchInput(!showSearch);
        }
      }
    ];

    return _.map(iconTools, icon => {
      const {
        iconName,
        iconType,
        isCursorPointer,
        text,
        onClickHandler
      } = icon;
      return (
        <div key={iconName} className="element">
          <IconWithNextText
            iconColor={systemColor}
            iconName={iconName}
            iconType={iconType}
            isCursorPointer={isCursorPointer}
            text={text}
            onClickHandler={onClickHandler}
          />
        </div>
      );
    });
  }

  renderToolIconWithModal() {
    const { systemColor } = this.props;
    const iconTools = [
      {
        iconName: 'pencil-alt',
        iconType: 'solid',
        isCursorPointer: true,
        text: OptionTools.EDIT_NICK_NAME
      },
      {
        iconName: 'paint-brush',
        iconType: 'solid',
        isCursorPointer: true,
        text: OptionTools.CHANGE_COLOR
      },
      {
        iconName: 'smile',
        iconType: 'regular',
        isCursorPointer: true,
        text: OptionTools.CHANGE_EMOJI
      },
      {
        iconName: 'bell',
        iconType: 'regular',
        isCursorPointer: true,
        text: OptionTools.NOTIFICATIONS
      }
    ];

    return _.map(iconTools, icon => {
      const { iconName, iconType, isCursorPointer, text } = icon;
      return (
        <CustomModal
          key={iconName}
          render={onClickToShowModal => (
            <div onClick={() => onClickToShowModal()} className="element">
              <IconWithNextText
                iconColor={systemColor}
                iconName={iconName}
                iconType={iconType}
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

export default connect(
  null,
  { changeShowSearchInput }
)(Options);

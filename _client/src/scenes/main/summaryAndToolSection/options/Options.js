import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import IconWithNextText from '../../../../components/elements/icon/IconWithNextText';
import CustomModal from '../../../../components/hoc/modal/Modal';
import { OptionTools, socketEvent } from '../../../../utils/constants';
import BaseComponent from '../BaseComponent';
import ColorsPanel from './colorPanel/ColorsPanel';
import EmojiPanel from './emojiPanel/EmojiPanel';
import {
  changeShowSearchInput,
  changeSystemColor,
  changeSelectedEmoji
} from '../../../../actions';

class Options extends Component {
  changeSystemColor(color) {
    const { socket, changeSystemColor, conversations } = this.props;
    const { selectedConversation } = conversations;
    socket.emit(socketEvent.CHANGE_SYSTEM_COLOR, {
      color,
      conversationId: selectedConversation.id
    });
    changeSystemColor(selectedConversation.setting.id, color);
  }

  renderModalContent(toolName, hideModal) {
    switch (toolName) {
      case OptionTools.CHANGE_COLOR:
        return (
          <ColorsPanel
            cancelButtonAction={hideModal}
            systemColor={this.props.systemColor}
            changeSystemColor={color => this.changeSystemColor(color)}
          />
        );
      case OptionTools.CHANGE_EMOJI:
        return (
          <EmojiPanel
            emojiIdsForOptions={this.props.ui.systemSettings.emojiIdsForOptions}
            changeSelectedEmoji={emoji => {
              this.props.changeSelectedEmoji(emoji.id, emoji.native);
            }}
            cancelButtonAction={hideModal}
          />
        );
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
        <div style={{ paddingBottom: '8px' }}>
          {this.renderToolIconWithoutModal()}
          {this.renderToolIconWithModal()}
        </div>
      </BaseComponent>
    );
  }
}

function mapStateToProps(state) {
  return {
    ui: state.ui,
    socket: state.socket,
    conversations: state.conversations
  };
}

export default connect(
  mapStateToProps,
  { changeShowSearchInput, changeSystemColor, changeSelectedEmoji }
)(Options);

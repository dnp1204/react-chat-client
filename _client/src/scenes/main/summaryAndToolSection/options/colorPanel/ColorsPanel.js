import './ColorsPanel.scss';

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { changeSystemColor } from '../../../../../actions';
import { Color, socketEvent } from '../../../../../utils/constants';
import BasePanel from '../basePanel/BasePanel';

class ColorsPanel extends PureComponent {
  renderColors(colors) {
    const {
      systemColor,
      socket,
      cancelButtonAction,
      conversations
    } = this.props;
    const {
      selectedConversation: { id }
    } = conversations;

    return colors.map(color => {
      return (
        <div
          key={color}
          className={`color-element ${systemColor === color ? 'active' : ''}`}
          style={{ backgroundColor: color }}
          onClick={() => {
            socket.emit(socketEvent.CHANGE_SYSTEM_COLOR, {
              color,
              conversationId: id
            });
            this.props.changeSystemColor(
              this.props.user.systemSetting.id,
              color
            );
            cancelButtonAction();
          }}
        />
      );
    });
  }

  renderColorsChoice(colorRows) {
    return colorRows.map((row, index) => {
      return (
        <div
          key={index}
          className="flex--row justify--space__between color-row"
        >
          {this.renderColors(row)}
        </div>
      );
    });
  }

  render() {
    const colorRow1 = [
      Color.BLUE,
      Color.PELOROUS,
      Color.AMBER,
      Color.CORAL_RED,
      Color.CAN_CAN
    ];
    const colorRow2 = [
      Color.DANUBE,
      Color.MALACHITE,
      Color.CRUSTA,
      Color.TONYS_PINK,
      Color.ELECTRIC_VIOLET
    ];
    const colorRow3 = [
      Color.BRIGHT_TURQUOISE,
      Color.FERN,
      Color.CONCORD,
      Color.HOT_PINK,
      Color.BLUE_BELL
    ];
    const color = [colorRow1, colorRow2, colorRow3];
    const title = 'Pick a color for this conversation';
    const text = 'Every one in this conversation will see this';

    return (
      <BasePanel
        title={title}
        text={text}
        cancelButtonAction={this.props.cancelButtonAction}
      >
        <div className="modal-content--main">
          {this.renderColorsChoice(color)}
        </div>
      </BasePanel>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth,
    socket: state.socket,
    conversations: state.conversations
  };
}

export default connect(
  mapStateToProps,
  { changeSystemColor }
)(ColorsPanel);

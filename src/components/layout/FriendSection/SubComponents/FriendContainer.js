import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import SquareAvatar from '../../../common/SquareAvatar';

const FriendContainer = ({
  avatar,
  firstName,
  lastName,
  lastMessage,
  lastSendMessageDate
}) => {
  return (
    <div className="friend-container">
      <div className="friend-container--info">
        <SquareAvatar avatar={avatar} />
        <div className="friend-container--info__name">
          <h4>
            {firstName} {lastName}
          </h4>
          <p className="light-text">{lastMessage}</p>
        </div>
      </div>
      <div className="friend-container--date">
        <p className="light-text">{moment(lastSendMessageDate).fromNow(true)}</p>
      </div>
    </div>
  );
};

FriendContainer.propTypes = {
  avatar: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  lastMessage: PropTypes.string,
  lastSendMessageDate: PropTypes.number
};

export default FriendContainer;

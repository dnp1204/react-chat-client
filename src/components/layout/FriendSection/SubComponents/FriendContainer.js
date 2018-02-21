import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import SquareAvatar from '../../../common/SquareAvatar';

const FriendContainer = ({
  id,
  avatar,
  firstName,
  lastName,
  lastMessage,
  lastSendMessageDate,
  onSelectFriend,
  selectedFriendId
}) => {
  return (
    <div
      onClick={() => onSelectFriend(id)}
      className={`friend-container ${id === selectedFriendId ? 'active' : ''}`}
    >
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
        <p className="light-text">
          {moment(lastSendMessageDate).fromNow(true)}
        </p>
      </div>
    </div>
  );
};

FriendContainer.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  lastMessage: PropTypes.string,
  lastSendMessageDate: PropTypes.number,
  onSelectFriend: PropTypes.func,
  selectedFriendId: PropTypes.number
};

export default FriendContainer;

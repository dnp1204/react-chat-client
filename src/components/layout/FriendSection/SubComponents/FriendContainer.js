import React from 'react';
import PropTypes from 'prop-types';
import SquareAvatar from '../../../common/SquareAvatar';

const FriendContainer = ({
  avatar,
  firstName,
  lastName,
  subTitleComponent,
  rightComponent,
  onSelectFriend,
  isActive
}) => {
  return (
    <div
      onClick={() => onSelectFriend()}
      className={`friend-container ${isActive ? 'active' : ''}`}
    >
      <div className="friend-container--info">
        <SquareAvatar avatar={avatar} />
        <div className="friend-container--info__name">
          <h4>
            {firstName} {lastName}
          </h4>
          {subTitleComponent}
        </div>
      </div>
      <div className="friend-container--date">{rightComponent}</div>
    </div>
  );
};

FriendContainer.propTypes = {
  avatar: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  subTitleComponent: PropTypes.element,
  rightComponent: PropTypes.element,
  onSelectFriend: PropTypes.func,
  isActive: PropTypes.bool
};

FriendContainer.defaultProps = {
  subTitleComponent: <div />,
  rightComponent: <div />,
  isActive: false,
  onSelectFriend: () => {}
};

export default FriendContainer;

import React from 'react';
import PropTypes from 'prop-types';
import './FriendContainer.scss';
import CircleAvatar from '../../../../components/elements/circleAvatar/CircleAvatar';

const FriendContainer = ({
  avatar,
  firstName,
  lastName,
  subTitleComponent,
  rightComponent,
  onSelectFriend,
  isActive,
  isHover,
  classNameForName,
  nameStyle
}) => {
  return (
    <div
      onClick={() => onSelectFriend()}
      className={`friend-container ${isActive ? 'active' : ''} ${
        isHover ? 'mouse-hover' : ''
      }`}
    >
      <div className="friend-container--info">
        <CircleAvatar avatar={avatar} />
        <div className="friend-container--info__name">
          <h4 style={nameStyle} className={classNameForName}>
            {firstName} {lastName}
          </h4>
          <div>{subTitleComponent}</div>
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
  isActive: PropTypes.bool,
  isHover: PropTypes.bool,
  nameStyle: PropTypes.object
};

FriendContainer.defaultProps = {
  subTitleComponent: <div />,
  rightComponent: <div />,
  isActive: false,
  isHover: true,
  onSelectFriend: () => {}
};

export default FriendContainer;
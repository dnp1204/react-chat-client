import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';

const OnlineTime = ({ isOnline, lastTimeOnline, small }) => {
  moment.updateLocale('en', {
    relativeTime: {
      ss: '%d seconds',
      mm: '%d minutes',
      hh: '%d hours',
      dd: '%d days',
      MM: '%d months'
    }
  });

  return (
    <p className="light-text" style={small ? { fontSize: '12px' } : {}}>
      {isOnline ? 'Active Now' : `Active ${moment(lastTimeOnline).fromNow()}`}
    </p>
  );
};

OnlineTime.proptypes = {
  isOnline: PropTypes.string,
  lastTimeOnline: PropTypes.string,
  small: PropTypes.bool
};

OnlineTime.defaultProps = {
  small: false
};

export default OnlineTime;

import './Loading.scss';
import React from 'react';
import { FadeLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className="spinner-container">
      <div className="spinner">
        <FadeLoader color={'#318dee'} />
      </div>
    </div>
  );
};

export default Loading;

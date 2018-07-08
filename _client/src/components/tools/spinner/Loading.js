import './Loading.scss';
import React from 'react';
import { RotateLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className="spinner-container">
      <div className="spinner">
        <RotateLoader color={'#A5A2A6'} />
      </div>
    </div>
  );
};

export default Loading;

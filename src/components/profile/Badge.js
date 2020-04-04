import React from 'react';
import './badge.css';

const Badge = (props) => {
  const {text, changeHandler} = props.config;
  return (
    <div className={`badge`} onClick={changeHandler}>
      {text}
    </div>
  );
};

export default Badge;
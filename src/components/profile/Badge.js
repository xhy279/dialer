import React from 'react';
import './badge.css';

const Badge = (props) => {
  const {text, changeHandler, style} = props.config;
  return (
    <div className="badge" style={style} onClick={changeHandler}>
      {text}
    </div>
  );
};

export default Badge;
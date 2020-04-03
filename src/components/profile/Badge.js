import React from 'react';
import './badge.css';

const Badge = ({text}) => {
  return (
    <div className="badge">
      {text}
    </div>
  );
};

export default Badge;
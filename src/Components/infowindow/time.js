import React from 'react';

export default function Time(props) {
  return (
    <div className="time-container">
        <p>{props.time}</p>
        <div className="dots"></div>
        <p>{props.status}</p>
    </div>
  );
};

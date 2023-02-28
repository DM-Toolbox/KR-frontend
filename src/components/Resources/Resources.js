import React from 'react';
import Wood from '../Wood/Wood.js';
import './Resources.css';

export default function Main() {
  return (
    <div>
      <div className="container">
        <div className="main-resources">
          <Wood />
          <Wood />
          <Wood />
        </div>
        <div className="main-resources">
          <Wood />
          <Wood />
          <Wood />
        </div>
      </div>
    </div>
  );
}

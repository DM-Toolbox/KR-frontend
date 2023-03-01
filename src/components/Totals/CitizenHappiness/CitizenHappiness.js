import React from 'react';
import './CitizenHappiness.css';

export default function CitizenHappiness() {
  return (
    <div>
      <div className="happiness-container">
        <div className="happiness">
          <p>Short Term</p>
          <p>Very High</p>
        </div>
        <div className="happiness">
          <p>Long Term</p>
          <p>Low</p>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import './Wood.css';

export default function Wood() {
  return (
    <div className="card">
      <div className="resource-card">
        <div>
          <h1>Wood</h1>
        </div>
        <div className="all-totals">
          <div className="totals">
            <p>Weekly Wood</p>
            <p>3123</p>
          </div>
          <div className="totals">
            <p>Weekly Lumber</p>
            <p>6246</p>
          </div>
          <div className="totals">
            <p>Banked</p>
            <p>17537</p>
          </div>
          <div className="totals">
            <p>Mark Of Ent</p>
            <p>48</p>
          </div>
        </div>
      </div>
    </div>
  );
}

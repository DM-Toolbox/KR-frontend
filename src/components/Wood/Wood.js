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
            <p className="left">Weekly Wood</p>
            <p className="right">3123</p>
          </div>
          <div className="totals">
            <p className="left">Weekly Lumber</p>
            <p className="right">6246</p>
          </div>
          <div className="totals">
            <p className="left">Banked</p>
            <p className="right">17537</p>
          </div>
          <div className="totals">
            <p className="left">Mark Of Ent</p>
            <p className="right">48</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import './Wood.css';

export default function Wood() {
  return (
    <div className="wood-card">
      <div className="wood-resource-card">
        <div>
          <h1>Wood</h1>
        </div>
        <div className="wood-all-totals">
          <div className="wood-totals">
            <p className="wood-left">Weekly Wood</p>
            <p className="wood-right">3123</p>
          </div>
          <div className="wood-totals">
            <p className="wood-left">Weekly Lumber</p>
            <p className="wood-right">6246</p>
          </div>
          <div className="wood-totals">
            <p className="wood-left">Banked</p>
            <p className="wood-right">17537</p>
          </div>
          <div className="wood-totals">
            <p className="wood-left">Mark Of Ent</p>
            <p className="wood-right">48</p>
          </div>
        </div>
      </div>
    </div>
  );
}

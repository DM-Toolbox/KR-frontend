import React from 'react';
import './Stone.css';

export default function Stone() {
  return (
    <div className="stone-card">
      <div className="stone-resource-card">
        <div>
          <h1>Stone</h1>
        </div>
        <div className="stone-all-totals">
          <div className="stone-totals">
            <p className="stone-left">Weekly Stone</p>
            <p className="stone-right">3123</p>
          </div>
          <div className="stone-totals">
            <p className="stone-left">Weekly Refined</p>
            <p className="stone-right">6246</p>
          </div>
          <div className="stone-totals">
            <p className="stone-left">Banked</p>
            <p className="stone-right">17537</p>
          </div>
          <div className="stone-totals">
            <p className="stone-left">Jewels</p>
            <p className="stone-right">48</p>
          </div>
        </div>
      </div>
    </div>
  );
}

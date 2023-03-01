import React from 'react';
import './Hunting.css';

export default function Hunting() {
  return (
    <div className="hunting-card">
      <div className="hunting-resource-card">
        <div>
          <h1>Hunting</h1>
        </div>
        <div className="hunting-all-totals">
          <div className="hunting-totals">
            <p className="hunting-left">Weekly Stone</p>
            <p className="hunting-right">3123</p>
          </div>
          <div className="hunting-totals">
            <p className="hunting-left">Weekly Refined</p>
            <p className="hunting-right">6246</p>
          </div>
          <div className="hunting-totals">
            <p className="hunting-left">Banked</p>
            <p className="hunting-right">17537</p>
          </div>
          <div className="hunting-totals">
            <p className="hunting-left">Jewels</p>
            <p className="hunting-right">48</p>
          </div>
        </div>
      </div>
    </div>
  );
}

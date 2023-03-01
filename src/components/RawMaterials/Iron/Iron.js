import React from 'react';
import './Iron.css';

export default function Iron() {
  return (
    <div className="iron-card">
      <div className="iron-resource-card">
        <div>
          <h1>Iron</h1>
        </div>
        <div className="iron-all-totals">
          <div className="iron-totals">
            <p className="iron-left">Weekly Stone</p>
            <p className="iron-right">3123</p>
          </div>
          <div className="iron-totals">
            <p className="iron-left">Weekly Refined</p>
            <p className="iron-right">6246</p>
          </div>
          <div className="iron-totals">
            <p className="iron-left">Banked</p>
            <p className="iron-right">17537</p>
          </div>
          <div className="iron-totals">
            <p className="iron-left">Jewels</p>
            <p className="iron-right">48</p>
          </div>
        </div>
      </div>
    </div>
  );
}

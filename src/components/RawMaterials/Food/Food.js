import React from 'react';
import './Food.css';

export default function Food() {
  return (
    <div className="food-card">
      <div className="food-resource-card">
        <div>
          <h1>Food</h1>
        </div>
        <div className="food-all-totals">
          <div className="food-totals">
            <p className="food-left">Weekly Stone</p>
            <p className="food-right">3123</p>
          </div>
          <div className="food-totals">
            <p className="food-left">Weekly Refined</p>
            <p className="food-right">6246</p>
          </div>
          <div className="food-totals">
            <p className="food-left">Banked</p>
            <p className="food-right">17537</p>
          </div>
          <div className="food-totals">
            <p className="food-left">Jewels</p>
            <p className="food-right">48</p>
          </div>
        </div>
      </div>
    </div>
  );
}

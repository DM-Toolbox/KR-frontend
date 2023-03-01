import React, { useState } from 'react';
import './Workers.css';

export default function Workers() {
  return (
    <div className="workers-main">
      <div className="workers-title">Workers</div>
      <div className="workers">
        <div className="workers-card workers-wood">
          <h2>Wood</h2>
          <input type="number"></input>
          <button type="button">Submit Workers</button>
          <p>Information about Worker numbers</p>
        </div>
        <div className="workers-card workers-stone">
          <h2>Mining (Stone)</h2>
          <input type="number" placeholder=""></input>
          <button>Submit Workers</button>
          <p>Information about Worker numbers</p>
        </div>
        <div className="workers-card workers-food">
          <h2>Food</h2>
          <input type="number" placeholder=""></input>
          <button>Submit Workers</button>
          <p>Information about Worker numbers</p>
        </div>
        <div className="workers-card workers-hunting">
          <h2>Hunting</h2>
          <input type="number" placeholder=""></input>
          <button>Submit Workers</button>
          <p>Information about Worker numbers</p>
        </div>
        <div className="workers-card workers-iron">
          <h2>Mining (Iron)</h2>
          <input type="number" placeholder=""></input>
          <button>Submit Workers</button>
          <p>Information about Worker numbers</p>
        </div>
      </div>
    </div>
  );
}

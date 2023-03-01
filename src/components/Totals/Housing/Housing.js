import React from 'react';
import './Housing.css';

export default function Housing() {
  return (
    <div className="container">
      <div className="title">Housing</div>
      <div className="sections">
        <div>
          <p className="headings">Housing Type</p>
          <p className="headings">BunkHouse - 30</p>
          <p className="headings">Family House - 10</p>
          <p className="headings">Mansion - 25</p>
        </div>
        <div>
          <p className="headings">Number Owned</p>
          <p className="values">26</p>
          <p className="values">3</p>
          <p className="values">9</p>
        </div>
        <div>
          <p className="headings">Total Housed</p>
          <p className="values">780</p>
          <p className="values">30</p>
          <p className="values">225</p>
        </div>
        <div>
          <p className="headings">Homeless</p>
          <p className="values">-2</p>
        </div>
      </div>
    </div>
  );
}

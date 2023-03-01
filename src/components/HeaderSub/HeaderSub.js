import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderSub.css';

export default function HeaderSub() {
  return (
    <div className="header-sub">
      <div>
        <Link to="/home">Home</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/housing">Housing</Link>
        <Link to="/citizen-happiness">Citizen Happiness</Link>
      </div>
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderSub.css';

export default function HeaderSub() {
  return (
    <div className="header-sub">
      <div>
        <Link to="/home">Home</Link>
        <Link to="/resources">Resources</Link>
      </div>
    </div>
  );
}

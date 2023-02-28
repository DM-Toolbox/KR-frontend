import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      Home
      <div>
        <Link to="/resources">
          <p className="link">Resources</p>
        </Link>
      </div>
    </div>
  );
}

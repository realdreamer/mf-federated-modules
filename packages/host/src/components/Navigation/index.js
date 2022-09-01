import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

export default function Navigation() {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
      </ul>
    </nav>
  )
}

import React from 'react';

import './index.css';

export default function App({ children }) {
  return (
    <div className="sidePanel">
      <h2>Side Panel</h2>
      {children}
    </div>
  );
}

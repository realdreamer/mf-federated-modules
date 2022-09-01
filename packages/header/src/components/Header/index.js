import React, { Suspense } from 'react';

import './index.css';

const Login = React.lazy(() => import("login/App"));

export default function Header() {
  return (
    <div className="header">
      <h2>Header</h2>
      <Suspense fallback="Loading Login">
        <Login />
      </Suspense>
    </div>
  );
}

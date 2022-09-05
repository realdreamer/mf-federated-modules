import React, { Suspense } from 'react';

import './index.css';

const Login = React.lazy(() => import("LoginMFE/App"));

export default function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <h2>Header</h2>
      </div>
      <Suspense fallback="Loading Login">
        <Login />
      </Suspense>
    </div>
  );
}

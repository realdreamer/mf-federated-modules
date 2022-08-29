import React, { Suspense } from 'react';
const Login = React.lazy(() => import("login/App"));

export default function App() {
  return (
    <div>
      Header
      <Suspense fallback={"loading..."}>
        <Login />
      </Suspense>
    </div>
  );
}

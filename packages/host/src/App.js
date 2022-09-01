import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

const Header = React.lazy(() => import("header/App"));
const Sidepanel = React.lazy(() => import("sidepanel/App"));

export default function App() {
  return (
    <Router>
      <main>
        Host Main Application
        <Suspense fallback={"loading..."}>
          <Header />
        </Suspense>
        <Suspense fallback={"loading..."}>
          <Sidepanel />
        </Suspense>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <section>
          <Switch>
            <Route path="/product">
              <div>Product</div>
            </Route>
            <Route path="/">
              <div>Home page</div>
            </Route>
          </Switch>
        </section>
      </main>
    </Router>
  );
}

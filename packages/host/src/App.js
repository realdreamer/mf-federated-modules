import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

const Header = React.lazy(() => import("header/App"));
const SidePanel = React.lazy(() => import("sidepanel/App"));

export default function App() {
  return (
    <Router>
      <main>
        <Suspense fallback={"Header loading..."}>
          <Header />
        </Suspense>
        <Suspense fallback={"Side panel loading..."}>
          <SidePanel />
        </Suspense>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
          </ul>
        </nav>
        <section>
          <Switch>
            <Route path="/" exact>
              <div>Home page</div>
            </Route>
            <Route path="/product">
              <div>Product</div>
            </Route>
          </Switch>
        </section>
      </main>
    </Router>
  );
}

import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <main>
        Host Main Application
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
            <Route path="/">
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

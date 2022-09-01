import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navigation from './components/Navigation';

import './index.css';

const Header = React.lazy(() => import("header/App"));
const SidePanel = React.lazy(() => import("sidepanel/App"));

export default function App() {
  return (
    <Router>
      <main>
        <Suspense fallback={"Header loading..."}>
          <Header />
        </Suspense>
        <section className="content-wrapper">
          <Suspense fallback={"Side panel loading..."}>
            <SidePanel>
              <Navigation />
            </SidePanel>
          </Suspense>
          <article className="page-wrapper">
            <Switch>
              <Route path="/" exact>
                <div>Home page</div>
              </Route>
              <Route path="/product">
                <div>Product</div>
              </Route>
            </Switch>
          </article>
        </section>
      </main>
    </Router>
  );
}

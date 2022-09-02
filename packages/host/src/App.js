import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ApolloProvider } from '@apollo/client';

import Navigation from './components/Navigation';

import './index.css';

import { client } from './gqlClient';

const Header = React.lazy(() => import("header/App"));
const SidePanel = React.lazy(() => import("sidepanel/App"));
//
const StarShips = React.lazy(() => import("product/StarShips"));

export default function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
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
                  <Suspense fallback={"Product page loading..."}>
                    <StarShips />
                  </Suspense>
                </Route>
              </Switch>
            </article>
          </section>
        </main>
      </ApolloProvider>
    </Router>
  );
}

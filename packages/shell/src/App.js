import React, { Suspense } from 'react';
import {ApolloProvider} from '@apollo/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Product from './components/Product';

import './index.css';

import { client } from './gqlClient';

const Header = React.lazy(() => import("HeaderMFE/App"));
const SidePanel = React.lazy(() => import("SidepanelMFE/App"));

export default function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <main>
        <Suspense fallback={"Header loading..."}>
          <Header />
        </Suspense>
        <section className="content-wrapper">
          <Suspense fallback={"Side panel loading..."}>
            <SidePanel />
          </Suspense>
          <article className="page-wrapper">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Product />} />
            </Routes>
          </article>
        </section>
      </main>
    </Router>
    </ApolloProvider>
  );
}

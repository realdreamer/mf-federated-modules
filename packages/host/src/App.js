import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import Product from './components/Product';

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
  );
}

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './components/Home';
import Product from './components/Product';

export default function App() {
  return (
    <Router>
      <main>
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </section>
      </main>
    </Router>
  );
}

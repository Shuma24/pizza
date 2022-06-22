import './scss/app.scss';
import React from 'react';

import { Header } from './components/Header';
import { Home } from './components/pages/Home';
import { NotFound } from './components/pages/NotFound';
import { Routes, Route } from 'react-router-dom';
import { Cart } from './components/pages/Cart';
import { Pizzatest } from './components/pizzatest';


const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/:id" element={<Pizzatest />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

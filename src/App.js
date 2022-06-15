import './scss/app.scss';
import React from 'react';

import { Header } from './components/Header';
import { Home } from './components/pages/Home';
import { NotFound } from './components/pages/NotFound';
import { Routes, Route } from 'react-router-dom';
import { Cart } from './components/pages/Cart';

export const searchContext = React.createContext();

function App() {
  const [searchPizza, setSearchPizza] = React.useState('');

  return (
    <div className="wrapper">
      <searchContext.Provider value={{ searchPizza, setSearchPizza }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </searchContext.Provider>
    </div>
  );
}

export default App;

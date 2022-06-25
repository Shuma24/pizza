import './scss/app.scss';
import React from 'react';
import Loadable from 'react-loadable';

import { Header } from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';

const Cart = Loadable({
  loader: () => import(/* webpackChunkName: "Cart" */ './components/pages/Cart'),
  loading: () => <div>Загрузка...</div>,
});

const NotFound = Loadable({
  loader: () => import(/* webpackChunkName: "NotFound" */ './components/pages/NotFound'),
  loading: () => <div>Загрузка...</div>,
});

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/cart"
            element={
              <React.Suspense fallback={<div>Загрузка...</div>}>
                <Cart />
              </React.Suspense>
            }
          />
          <Route
            path="*"
            element={
              <React.Suspense fallback={<div>Загрузка...</div>}>
                <NotFound />
              </React.Suspense>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;

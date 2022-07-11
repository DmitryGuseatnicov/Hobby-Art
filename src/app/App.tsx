import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import {
  About,
  BonusProgram,
  Catalog,
  DeliveryInfo,
  Home,
  PersonalArea,
  Product,
  Products,
  Refund
} from 'pages';

import Layout from './Layout';
import 'app/styles/index.scss';

const App = () => {
  const isAuth = true;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:name" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/delivery-info" element={<DeliveryInfo />} />
        <Route path="/bonus-program" element={<BonusProgram />} />
        <Route path="/refund" element={<Refund />} />
        {isAuth && <Route path="/personal-area" element={<PersonalArea />} />}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default App;

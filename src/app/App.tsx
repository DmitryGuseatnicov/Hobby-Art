import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import {
  About,
  BonusProgram,
  Catalog,
  DeliveryInfo,
  Home,
  PersonalProfile,
  Product,
  Products,
  Refund
} from 'pages';
import { shopping } from 'features/shopping';
import { AsyncDispatch } from 'entities/store';
import { userModel } from 'entities/user';

import Layout from './Layout';
import 'app/styles/index.scss';

const App = () => {
  const isAuth = userModel.useAuth();
  const user = userModel.useUser();

  const dispatch = useDispatch<AsyncDispatch>();
  useEffect(() => {
    dispatch(shopping.getCart(user.id));
  }, [user.id]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:category" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/delivery-info" element={<DeliveryInfo />} />
        <Route path="/bonus-program" element={<BonusProgram />} />
        <Route path="/refund" element={<Refund />} />
        {isAuth && <Route path="/personal-profile" element={<PersonalProfile />} />}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

export default App;

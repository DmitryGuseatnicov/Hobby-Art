import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'widgets';

const Layout = () => (
  <>
    <div className="container">
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </div>
    <footer />
  </>
);

export default Layout;

import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from 'widgets';

const Layout = () => (
  <>
    <Header />
    <div className="container">
      <main className="main">
        <Outlet />
      </main>
    </div>
    <Footer />
  </>
);

export default Layout;

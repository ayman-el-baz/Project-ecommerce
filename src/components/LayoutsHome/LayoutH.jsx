import React from 'react';
import Footer from './FooterH';
import Header from './HeaderH';

function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;

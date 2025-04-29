// src/components/Layout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header className="bg-blue-600 text-white p-4"></Header>
      
      <div className="flex flex-1">
        {/* Main Content */}
        <main className="flex-1 p-0">
          {children}
        </main>
      </div>

      {/* Footer */}
      <Footer className="bg-blue-600 text-white p-4"></Footer>
    </div>
  );
};

export default Layout;

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4 text-center md:text-left">
        
        {/* Logo/Brand */}
        <div className="text-lg font-semibold">
          © 2025 NiroWeather. All rights reserved.
        </div>

        {/* Social Links */}
        <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-4">
          <a href="#" className="hover:text-white transition">Facebook</a>
          <a href="#" className="hover:text-white transition">Instagram</a>
          <a href="#" className="hover:text-white transition">Twitter</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
